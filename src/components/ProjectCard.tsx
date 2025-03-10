import { PropsWithChildren, ReactElement } from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { Card } from "./Card.tsx";
import { ReactMarkdown } from "./ReactMarkdown.tsx";
import { useHover } from "../hooks/useHover.ts";

interface ProjectCardObservedProps extends PropsWithChildren {
  className: string;
  projectHref: string;
}

interface ProjectCardProps {
  description: string;
  imageUrl?: string;
  imageHoverUI?: ReactElement;
}

const ProjectCardObserved = ({
  children,
  className,
}: ProjectCardObservedProps) => {
  const { ref, inView } = useInView({
    root: document.querySelector(".lenis"),
    threshold: 0.1,
  });

  return (
    <div
      data-in-view={inView}
      ref={ref}
      className={clsx(
        "opacity-0 data-[in-view=true]:opacity-100 block m-4 !bg-transparent !shadow-none",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const ProjectCard = ({
  description,
  imageUrl,
  imageHoverUI,
}: ProjectCardProps) => {
  const { hover, onMouseLeave, onMouseEnter } = useHover();

  return (
    <Card as={ProjectCardObserved} className="justify-center gap-32">
      {imageUrl && (
        <div
          onMouseLeave={onMouseLeave}
          onMouseEnter={onMouseEnter}
          className="w-[31rem] h-[31rem] self-center rounded-xl border border-4 border-gray-300/20 filter-[drop-shadow(0_0_10px_rgba(255,255,255,0.8))] overflow-hidden"
        >
          <img
            data-hover={hover}
            width={500}
            height={500}
            className="w-full h-full data-[hover=true]:-z-30 data-[hover=true]:absolute"
            src={imageUrl}
            alt="project"
          />
          {imageHoverUI}
        </div>
      )}
      <div className="self-center rounded-2xl shadow-lg bg-white/20 backdrop-blur-md p-8 scale w-1/2">
        <ReactMarkdown md={description} />
      </div>
    </Card>
  );
};
