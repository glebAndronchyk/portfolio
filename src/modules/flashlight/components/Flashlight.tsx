import { useRef } from "react";
import { FlashlightProps } from "../types/FlashlightProps.ts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import clsx from "clsx";

export const Flashlight = ({ parentRef, className }: FlashlightProps) => {
  const flashlightRef = useRef<HTMLDivElement | null>(null);
  // const [hidden, setHidden] = useState(true);
  const identitySelector = ".flashlight";

  // useEffect(() => {
  //   const parent = parentRef.current;
  //   const ac = new AbortController();
  //   const listenerArgs = { signal: ac.signal };
  //
  //   parent?.addEventListener(
  //     "mouseenter",
  //     () => {
  //       setHidden(false);
  //     },
  //     listenerArgs,
  //   );
  //   parent?.addEventListener(
  //     "mouseleave",
  //     () => {
  //       setHidden(true);
  //     },
  //     listenerArgs,
  //   );
  //
  //   return () => ac.abort();
  // }, []);

  useGSAP(
    () => {
      const parent = parentRef.current;
      const flashlight = flashlightRef.current;
      if (parent && flashlight) {
        const { left, top } = parent.getBoundingClientRect();
        const { width, height } = flashlight.getBoundingClientRect();

        parent.addEventListener("mouseenter", () => {
          gsap.to(identitySelector, {
            duration: 0.3,
            opacity: 1,
          });
        });

        parent.addEventListener("mouseleave", () => {
          gsap.to(identitySelector, {
            duration: 0.3,
            opacity: 0,
          });
        });

        parent.addEventListener("mousemove", (e) => {
          gsap.to(identitySelector, {
            duration: 0.1,
            x: e.clientX - left - width,
            y: e.clientY - top - height,
            ease: "power2.out",
          });
        });
      }
    },
    { scope: parentRef },
  );

  return (
    <div
      // data-hidden={hidden}
      ref={flashlightRef}
      className={clsx(
        "rounded-full -z-10 absolute w-20 h-20 opacity-50 pointer-events-none -translate-x-[150%] -translate-y-[150%]",
        className,
        identitySelector
          .split("")
          .filter((c) => c !== ".")
          .join(""),
      )}
    />
  );
};
