import { HTMLProps } from "react";
import clsx from "clsx";

interface AvatarProps extends HTMLProps<HTMLImageElement> {
  avatarUrl?: string;
}

export const Avatar = ({ avatarUrl, className, ...props }: AvatarProps) => {
  const classNames = clsx(
    className,
    "block w-36 h-36 rounded-full overflow-hidden border border-4 border-gray-300 shadow-xl",
  );

  return <img {...props} className={classNames} src={avatarUrl} alt="avatar" />;
};
