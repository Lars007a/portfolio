import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SiteComp from "./siteComp.jsx";

//Importere app comp, og viser det.
//Filen her, bliver kørt i index.html.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SiteComp />
  </StrictMode>
);
