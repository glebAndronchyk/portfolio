import {
  useContentStepperState,
  UseContentStepperStateReturn,
} from "../hooks/useContentStepperState.tsx";
import { createContext, ReactNode, useContext } from "react";
import { withSafeContext } from "../lib/withSafeContext.ts";

const ContentStepperContext =
  createContext<UseContentStepperStateReturn | null>(null);

export const ContentStepperProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const state = useContentStepperState();

  return (
    <ContentStepperContext.Provider value={state}>
      {children}
    </ContentStepperContext.Provider>
  );
};

const useContentStepperContext = () => useContext(ContentStepperContext);
export default withSafeContext(useContentStepperContext);
