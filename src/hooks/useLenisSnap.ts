import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";

export const useLenisSnap = (
  predicateFn: () => boolean,
  elements: HTMLElement[],
) => {
  const [snapOffsets, setSnapOffsets] = useState<number[]>([]);

  useEffect(() => {
    const updateOffsets = () => {
      const offsets = elements.map((el) => {
        return el ? el.offsetLeft : 0;
      });
      setSnapOffsets(offsets);
    };

    updateOffsets();

    window.addEventListener("resize", updateOffsets);
    return () => window.removeEventListener("resize", updateOffsets);
  }, [elements]);

  useLenis(
    (ctx) => {
      const predicateResult = predicateFn();
      if (predicateResult && snapOffsets.length > 0) {
        if (Math.abs(ctx.velocity) < 0.001) {
          const nearestSnap = snapOffsets.reduce((prev, curr) =>
            Math.abs(curr - ctx.scroll) < Math.abs(prev - ctx.scroll)
              ? curr
              : prev,
          );
          ctx.scrollTo(nearestSnap);
        }
      }
    },
    [snapOffsets, predicateFn],
  );
};
