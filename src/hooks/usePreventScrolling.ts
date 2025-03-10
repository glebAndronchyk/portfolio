import { useStep } from "./useStep.ts";
import { useLenis } from "lenis/react";
import { Steps } from "../types/contentSteps.ts";

export const usePreventScrolling = (step: Steps) => {
  const { isTransitioning, isActiveStep } = useStep(step, {}, []);

  useLenis(
    (ctx) => {
      if (!isTransitioning && isActiveStep) {
        ctx.stop();
      }
    },
    [isTransitioning, isActiveStep],
  );
};
