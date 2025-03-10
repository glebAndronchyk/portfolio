import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "lenis/dist/lenis.css";
import { App } from "./app/App.tsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
