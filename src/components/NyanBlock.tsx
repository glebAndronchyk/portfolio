import Lottie from "lottie-react";
import nyanAnimation from "../assets/lotties/nyan.json";
import { ContentStepProps } from "../types/contentSteps.ts";
import { delay } from "../lib/time.ts";
import { useStep } from "../hooks/useStep.ts";
import { useEffect, useState } from "react";
import { usePreventScrolling } from "../hooks/usePreventScrolling.ts";

export const NyanBlock = ({ step }: Required<ContentStepProps>) => {
  usePreventScrolling(step);

  const [mayMoveNext, setMayMoveNext] = useState({
    isAnimationBroughtHelpfulPayload: false,
    isProjectsLoaded: true,
  });

  const { isActiveStep, isExiting, moveNext } = useStep(
    step,
    {
      onStepChange: async () => {
        await delay(NYAN_TIMEOUT);
        setMayMoveNext((prevState) => ({
          ...prevState,
          isAnimationBroughtHelpfulPayload: true,
        }));
      },
    },
    [],
  );

  const NYAN_TIMEOUT = 3000;

  const _finishProjectsLoading = () => {
    if (true) {
      setMayMoveNext((prevState) => ({
        ...prevState,
        isProjectsLoaded: true,
      }));
    }
  };

  const _moveNext = () => {
    const { isAnimationBroughtHelpfulPayload, isProjectsLoaded } = mayMoveNext;

    if (isAnimationBroughtHelpfulPayload && isProjectsLoaded) {
      moveNext();
    }
  };

  useEffect(_moveNext, [mayMoveNext]);

  useEffect(_finishProjectsLoading, [true]);

  return (
    <div
      data-active={isActiveStep}
      data-exiting={isExiting}
      id={step}
      className="-z-10 w-full h-full shrink-0 data-[exiting=true]:duration-500 data-[active=true]:opacity-100 data-[active=true]:duration-2200 opacity-0 transition-all"
    >
      <div
        data-active={isActiveStep}
        data-exiting={isExiting}
        className="relative flex w-full h-full -translate-x-[150%] items-center justify-center data-[active=true]:translate-x-0 duration-1100 data-[exiting=true]:translate-x-[150%] data-[exiting=true]:duration-2000"
      >
        <Lottie animationData={nyanAnimation} />
      </div>
    </div>
  );
};
