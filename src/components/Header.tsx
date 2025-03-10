import { Avatar } from "./Avatar.tsx";
import { Flashlight } from "../modules/flashlight";
import { useRef } from "react";
import { Card } from "./Card.tsx";
import { ReactMarkdown } from "./ReactMarkdown.tsx";

interface HeaderProps {
  avatarUrl?: string;
  description?: string | null;
}

export const Header = ({ avatarUrl, description }: HeaderProps) => {
  const headerRef = useRef<HTMLDivElement | null>(null);

  return (
    <Card
      as="header"
      ref={headerRef}
      className="row-start-2 col-start-4 col-span-6 row-span-3 overflow-hidden p-8 flex gap-12 cursor-none"
    >
      <Avatar className="self-center" avatarUrl={avatarUrl} />
      <div className="flex-1 overflow-auto">
        <ReactMarkdown md={description} />
      </div>
      <Flashlight
        className="bg-yellow-100/75 blur-lg data-[hidden=true]:opacity-0 opacity-1"
        parentRef={headerRef}
      />
      {/*<Flashlight*/}
      {/*  className="bg-yellow-200 blur-sm data-[hidden=true]:opacity-0 opacity-1"*/}
      {/*  parentRef={headerRef}*/}
      {/*/>*/}
      <p className="absolute cursor-none top-0 right-0 text-white/2 select-none hover:text-gray-400 duration-300">
        {"fenvi <3"}
      </p>
    </Card>
  );
};
