import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import SiteComp from "./siteComp.jsx";
import Nav from "./comps/navigation/navigation.jsx";
import RightSec from "./comps/rightSec/rightSec.jsx";
import GeneralLayout from "./comps/generalLayout/generalLayout.jsx";
import Intro from "./comps/introduction/intro.jsx";
import Pic from "./assets/avatar.jpg";
import ContactSec from "./comps/contactSec/contactSec.jsx";
import ContactCard from "./comps/contactCard/contact.jsx";
import { BiPhone } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import Card from "./comps/projectCard/card.jsx";
import CardSec from "./comps/projectSection/cardSec.jsx";

import SkillCard from "./comps/skillCard/skillCard.jsx";
import SkillSec from "./comps/skillSec/skillSec.jsx";
import { FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";

//Importere app comp, og viser det.
//Filen her, bliver kørt i index.html.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeneralLayout>
      <Nav />
      <RightSec>
        <Intro id={"intro"} pic={Pic} />
        <CardSec title={"Projekt eksempler"} id={"projects"}>
          <Card
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
          <Card
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
          <Card
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
          <Card
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
        </CardSec>

        <SkillSec id={"skills"} title={"Færdigheder"}>
          <SkillCard
            desc={
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur"
            }
            img={<FaReact size={30} />}
            imgAlt={"Pic"}
            title={"React"}
          />

          <SkillCard
            desc={
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur"
            }
            img={<DiJavascript />}
            imgAlt={"Pic"}
            title={"React"}
          />

          <SkillCard
            desc={
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur"
            }
            img={<DiCss3 size={30} />}
            imgAlt={"Pic"}
            title={"React"}
          />

          <SkillCard
            desc={
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur"
            }
            img={<DiHtml5 size={30} />}
            imgAlt={"Pic"}
            title={"React"}
          />
        </SkillSec>

        <ContactSec id={"contact"} title={"Kontakt mig"}>
          <ContactCard
            title={"Telefon"}
            info={"+45 42 46 48 79"}
            icon={<BiPhone size={60} />}
          />

          <ContactCard
            title={"Email"}
            info={"eksempel@eksempel.dk"}
            icon={<MdOutlineEmail size={60} />}
          />
        </ContactSec>
      </RightSec>
    </GeneralLayout>
  </StrictMode>
);
