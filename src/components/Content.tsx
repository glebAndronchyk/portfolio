import { DiveInto } from "./DiveInto.tsx";
import { useEffect, useRef } from "react";
import { LenisRef, ReactLenis } from "lenis/react";
import gsap from "gsap";
import { NyanBlock } from "./NyanBlock.tsx";
import { ProjectsContent } from "./ProjectsContent.tsx";

export const Content = () => {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis
      options={{
        orientation: "horizontal",
        autoRaf: false,
        gestureOrientation: "both",
        duration: 0.75,
      }}
      root={false}
      ref={lenisRef}
      className="overflow-hidden col-start-2 row-start-5 row-span-7 col-span-10 flex-4 [&>div]:w-full [&>div]:h-full [&>div]:flex"
    >
      <div className="flex w-full h-full">
        <DiveInto step="dive" />
        <NyanBlock step="nyan" />
        <ProjectsContent step="content" />
      </div>
    </ReactLenis>
  );
};
