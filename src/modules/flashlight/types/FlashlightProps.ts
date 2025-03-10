import { RefObject } from "react";

export interface FlashlightProps {
  parentRef: RefObject<HTMLElement | null>;
  className?: string;
}
