import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import SiteComp from "./siteComp.jsx";
import Nav from "./comps/navigation/navigation.jsx";
import RightSec from "./comps/rightSec/rightSec.jsx";
import GeneralLayout from "./comps/generalLayout/generalLayout.jsx";

//Importere app comp, og viser det.
//Filen her, bliver kørt i index.html.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeneralLayout>
      <Nav />
      <RightSec>
        <p>Hej</p>
        <p>Hej</p>
        <p>Hej</p>
        <p>Hej</p>
        <p>Hej</p>
      </RightSec>
    </GeneralLayout>
  </StrictMode>
);
