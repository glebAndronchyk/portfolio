import { createBrowserRouter, RouterProvider } from "react-router";
import { RootPage } from "../pages/root/page";
import { QueryClientProviderWrapper } from "../providers/QueryClientProviderWrapper.tsx";
import { ContentStepperProvider } from "../providers/ContentStepperProvider.tsx";
import { CustomView, isMobile } from "react-device-detect";
import { UnsupportedPage } from "../pages/unsupported/page.tsx";

const isScreenSupported =
  !isMobile && window.innerWidth < 3000 && window.innerWidth > 1200;

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <CustomView condition={!isScreenSupported}>
          <UnsupportedPage />
        </CustomView>
        <CustomView condition={isScreenSupported}>
          <RootPage />
        </CustomView>
      </>
    ),
  },
]);

export const RouterProviderWrapper = () => {
  return (
    <ContentStepperProvider>
      <QueryClientProviderWrapper>
        <RouterProvider router={router} />
      </QueryClientProviderWrapper>
    </ContentStepperProvider>
  );
};
