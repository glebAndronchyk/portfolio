import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import clsx from "clsx";
import { PropsWithChildren } from "react";

interface ReactMarkdownProps {
  md: string | null | undefined;
  className?: string;
}

const MdH2 = ({ children }: PropsWithChildren) => {
  return (
    <h2 className="underline text-white/80 text-3xl font-bold mb-4 text-center">
      {children}
    </h2>
  );
};

const MdH4 = ({ children }: PropsWithChildren) => {
  return (
    <h4 className="text-white/80 mb-2 text-2xl text-center">{children}</h4>
  );
};

const MdP = ({ children }: PropsWithChildren) => {
  return <p className="text-white/80 mb-4 text-lg">{children}</p>;
};

const MdStrong = ({ children }: PropsWithChildren) => {
  return (
    <strong className="font-bold text-white/80 text-xl">{children}</strong>
  );
};

const MdA = ({ children }: PropsWithChildren) => {
  return <a className="underline cursor-pointer">{children}</a>;
};

const MdHr = ({ children }: PropsWithChildren) => {
  return <hr className="my-4">{children}</hr>;
};

export const ReactMarkdown = ({ md, className }: ReactMarkdownProps) => {
  return (
    <div className={clsx("text-md", className)}>
      <Markdown
        components={{
          h2: MdH2,
          h4: MdH4,
          p: MdP,
          a: MdA,
          strong: MdStrong,
          hr: MdHr,
        }}
        remarkPlugins={[remarkGfm]}
      >
        {md}
      </Markdown>
    </div>
  );
};
