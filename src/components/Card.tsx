import { ComponentProps, ElementType, forwardRef } from "react";
import clsx from "clsx";

type CardProps<T extends ElementType> = {
  as?: T;
  children?: React.ReactNode;
} & Omit<ComponentProps<T>, "as">;

export const Card = forwardRef(
  <T extends ElementType = "div">(
    { as, children, ...rest }: CardProps<T>,
    ref: any,
  ) => {
    const Component = as || "div";

    return (
      <Component
        {...rest}
        ref={ref}
        className={clsx(
          rest.className,
          "w-full h-full transition-all duration-1000 shrink-0 text-white flex gap-4 p-4 rounded-2xl shadow-lg bg-white/35 backdrop-blur-md",
        )}
      >
        {children}
      </Component>
    );
  },
);
