import { useReward } from "react-rewards";
import { ContentStepProps } from "../types/contentSteps.ts";
import { usePreventScrolling } from "../hooks/usePreventScrolling.ts";
import { useStep } from "../hooks/useStep.ts";

export const DiveInto = ({ step }: Required<ContentStepProps>) => {
  usePreventScrolling(step);

  const { reward: confetti } = useReward("reward", "confetti");
  const { reward: balloons } = useReward("reward", "balloons");
  const { moveNext } = useStep(step, {}, []);

  const handleClick = () => {
    moveNext();
    confetti();
  };

  const handleMouseLeave = () => {
    const rndBalloons = Math.random() < 0.09;

    if (rndBalloons) {
      balloons();
    }
  };

  return (
    <div id={step} className="w-full shrink-0 flex items-center justify-center">
      <button
        className="px-6 py-2 text-white bg-black rounded-md transition-all hover:bg-white hover:text-black cursor-pointer relative"
        id="reward-button"
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <span id="reward" className="text-center">
          ????
        </span>
      </button>
    </div>
  );
};
