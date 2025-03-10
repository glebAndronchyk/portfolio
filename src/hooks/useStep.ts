import { Steps } from "../types/contentSteps.ts";
import { useEffect, useRef } from "react";
import useContentStepperContext from "../providers/ContentStepperProvider.tsx";
import { useLenis } from "lenis/react";
import { easeInOutQuad } from "../lib/easing.ts";
import { delay } from "../lib/time.ts";

export const useStep = (
  step: Steps | undefined,
  args: {
    onStepChange?: (args: { isTransitioning: boolean }) => void;
    scrollArgs?: object;
  },
  deps: unknown[],
) => {
  const {
    activeStep,
    changeStateFactory,
    isTransitioning,
    setIsTransitioning,
  } = useContentStepperContext();
  const prevStepRef = useRef(activeStep);
  const lenis = useLenis();

  const isActiveStep = activeStep === step;
  const isExiting =
    prevStepRef.current === step && prevStepRef.current !== activeStep;
  const { moveNext: moveNextLib, movePrev: movePrevLib } = changeStateFactory(
    step!,
  );

  useEffect(() => {
    prevStepRef.current = activeStep;
  }, [activeStep]);

  useEffect(() => {
    if (isActiveStep) {
      args.onStepChange?.({ isTransitioning });
    }
  }, [isActiveStep, ...deps]);

  const moveNext = () => {
    if (!lenis) return;

    lenis.start();
    setIsTransitioning(true);
    const nextStep = moveNextLib();
    lenis?.scrollTo(`#${nextStep}`, {
      ...args.scrollArgs,
      easing: easeInOutQuad,
      onComplete: () => delay(500).then(() => setIsTransitioning(false)),
    });
  };

  const movePrev = () => {
    if (!lenis) return;

    lenis.start();
    setIsTransitioning(true);
    const prevStep = movePrevLib();
    lenis?.scrollTo(`#${prevStep}`, {
      ...args.scrollArgs,
      easing: easeInOutQuad,
      onComplete: () => delay(500).then(() => setIsTransitioning(false)),
    });
  };

  return { isActiveStep, isExiting, isTransitioning, moveNext, movePrev };
};
