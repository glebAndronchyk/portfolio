import { Background } from "../../components/Backgdround.tsx";
import { Header } from "../../components/Header.tsx";
import { useGetPersonsData } from "../../hooks/useGetPersonsData.ts";
import bioMarkdown from "../../assets/md/bio.md";
import { Content } from "../../components/Content.tsx";

export const RootPage = () => {
  const { data } = useGetPersonsData();
  const responseData = data?.data;

  return (
    <>
      <Background />
      <main className=" md:text-md xl:text-2xl w-screen h-screen grid grid-rows-12 grid-cols-12">
        <Header
          avatarUrl={responseData?.avatar_url}
          description={bioMarkdown}
        />
        <Content />
        {/*<div className="flex-[0.5] grid grid-rows-[auto_1fr] min-h-screen max-h-screen overflow-hidden gap-3 z-10 py-12">*/}
        {/*  /!*<Footer />*!/*/}
        {/*</div>*/}
      </main>
    </>
  );
};
