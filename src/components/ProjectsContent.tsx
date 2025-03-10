import { ContentStepProps } from "../types/contentSteps.ts";
import { useRef } from "react";
import { ProjectCard } from "./ProjectCard.tsx";
import rpbMd from "../assets/md/rpb.md";
import portfolioMd from "../assets/md/portfolio.md";
import moreProjectsMd from "../assets/md/more-projects.md";
// import { useStep } from "../hooks/useStep.ts";
// import { useReward } from "react-rewards";

const projects = [
  {
    description: rpbMd,
    imageUrl: "/images/rpb-preview.gif",
    imageHoverUI: (
      <span className="w-[31rem] h-[31rem]">
        i was in rush sorry for bad quality D:
      </span>
    ),
  },
  {
    description: portfolioMd,
    imageUrl: "/images/shaily.png",
    imageHoverUI: (
      <img
        width={500}
        height={500}
        className="w-full h-full"
        src="/images/mars.jpg"
      />
    ),
  },
  {
    description: moreProjectsMd,
  },
];

export const ProjectsContent = ({ step }: ContentStepProps) => {
  const projectsContainerRef = useRef<HTMLDivElement | null>(null);
  // const { reward: confetti } = useReward("content", "confetti");

  // useStep(step, {}, []);

  return (
    <>
      {/*<span className="absolute top-0 left-0" id="content" />*/}

      <div
        ref={projectsContainerRef}
        id={step}
        className="shrink-0 w-full flex p-4 relative aspect-video"
      >
        {projects.map((project) => (
          <ProjectCard {...project} key={project.description} />
        ))}
      </div>
    </>
  );
};
