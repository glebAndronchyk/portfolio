import { PlasmaBackground } from "react-plasma-background";

export const Background = () => {
  return (
    <div className="-z-20 fixed w-screen h-screen bg-black">
      <PlasmaBackground
        initial={{
          blocksColors: ["#87d955", "#2d6cbb", "#e15175"],
        }}
      />
    </div>
  );
};
