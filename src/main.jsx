import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import SiteComp from "./siteComp.jsx";
import Nav from "./comps/navigation/navigation.jsx";
import RightSec from "./comps/rightSec/rightSec.jsx";
import GeneralLayout from "./comps/generalLayout/generalLayout.jsx";
import Intro from "./comps/introduction/intro.jsx";
import Pic from "./assets/avatar.jpg";
import ProjSec from "./comps/projectSection/projectSec.jsx";
import ProjCard from "./comps/projectCard/projectCard.jsx";

//Importere app comp, og viser det.
//Filen her, bliver kørt i index.html.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeneralLayout>
      <Nav />
      <RightSec>
        <Intro id={"intro"} pic={Pic} />
        <ProjSec title={"Projekt eksempler"} id={"projex"}>
          <ProjCard
            demoLink={"#"}
            githubLink={"#"}
            img={Pic}
            imgAlt={"Demo billed"}
            desc={
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur"
            }
            title={"Projektnavn"}
            badges={["Javascript", "React", "HTML/CSS"]}
          />
          <ProjCard
            demoLink={"#"}
            githubLink={"#"}
            img={Pic}
            imgAlt={"Demo billed"}
            desc={
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur"
            }
            title={"Projektnavn"}
            badges={["Javascript", "React", "HTML/CSS"]}
          />
          <ProjCard
            demoLink={"#"}
            githubLink={"#"}
            img={Pic}
            imgAlt={"Demo billed"}
            desc={
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur"
            }
            title={"Projektnavn"}
            badges={["Javascript", "React", "HTML/CSS"]}
          />
          <ProjCard
            demoLink={"#"}
            githubLink={"#"}
            img={Pic}
            imgAlt={"Demo billed"}
            desc={
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur"
            }
            title={"Projektnavn"}
            badges={["Javascript", "React", "HTML/CSS", "Figma", "Github"]}
          />
        </ProjSec>
      </RightSec>
    </GeneralLayout>
  </StrictMode>
);
