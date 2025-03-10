import { useState } from "react";
import { Steps } from "../types/contentSteps.ts";

export const useContentStepperState = () => {
  const [activeStep, setActiveStep] = useState<Steps>("dive");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const stepsFlow: Steps[] = ["dive", "nyan", "content"];

  const changeStep = (step: Steps) => setActiveStep(step);

  const moveNext = (currentStep: Steps) => {
    const currentStepIndex = stepsFlow.findIndex(
      (step) => currentStep === step,
    );
    const nextStepIndex = currentStepIndex + 1;
    const goToIndex = nextStepIndex > stepsFlow.length - 1 ? 0 : nextStepIndex;
    const newStep = stepsFlow[goToIndex];

    changeStep(stepsFlow[goToIndex]);
    return newStep;
  };

  const movePrev = (currentStep: Steps) => {
    const currentStepIndex = stepsFlow.findIndex(
      (step) => currentStep === step,
    );
    const nextStepIndex = currentStepIndex - 1;
    const goToIndex = nextStepIndex < 0 ? stepsFlow.length - 1 : nextStepIndex;
    const newStep = stepsFlow[goToIndex];

    changeStep(newStep);
    return newStep;
  };

  const changeStateFactory = (currentStep: Steps) => ({
    moveNext: () => moveNext(currentStep),
    movePrev: () => movePrev(currentStep),
  });

  return {
    changeStep,
    changeStateFactory,
    activeStep,
    stepsFlow,
    movePrev,
    moveNext,
    isTransitioning,
    setIsTransitioning,
  } as const;
};

export type UseContentStepperStateReturn = ReturnType<
  typeof useContentStepperState
>;
