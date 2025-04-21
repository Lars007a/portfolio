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

//pics for cards.
import projPic1 from "./assets/semesteropg.png";
import projPic2 from "./assets/score.png";
import projPic3 from "./assets/frem.png";

//intro pic
import cvPic from "./assets/cv.jpg";

//Importere app comp, og viser det.
//Filen her, bliver kørt i index.html.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeneralLayout>
      <Nav />
      <RightSec>
        <Intro id={"intro"} pic={cvPic} />
        <CardSec title={"Eksempel projekter"} id={"projects"}>
          <Card
            demoLink={"https://lars007a.github.io/semesteropgave/"}
            githubLink={"https://github.com/Lars007a/semesteropgave"}
            img={projPic1}
            imgAlt={"Demo billed"}
            desc={
              "Legekrogen, faktisk min semesteropgave, er en simpel hjemmeside til en fiktiv legetøjsbutik. Hjemmesiden er lavet som en semesteropgave under uddannelsen."
            }
            title={"Legekrogen"}
            badges={["Javascript", "React", "HTML/CSS"]}
          />
          <Card
            demoLink={"https://lars007a.github.io/fremtidProjekt/"}
            githubLink={"https://github.com/Lars007a/fremtidProjekt"}
            img={projPic3}
            imgAlt={"Demo billed"}
            desc={
              "En hjemmeside der er lavet til et skoleprojekt, hvor vi skulle skrive om nogle ting der ville ændre sig i fremtiden i forhold til teknologi og internettet."
            }
            title={"Side for fremtidsprojekt"}
            badges={["Javascript", "React", "HTML/CSS"]}
          />
          <Card
            demoLink={"https://lars007a.github.io/scorepanel/"}
            githubLink={"https://github.com/Lars007a/scorepanel/"}
            img={projPic2}
            imgAlt={"Demo billed"}
            desc={
              "Et projekt der viser et simpelt scorepanel til en håndboldkamp. Scorepanelet er ikke kun et design, men kan faktisk også tæle mål, tid, osv."
            }
            title={"Scorepanel"}
            badges={["Javascript", "React", "HTML/CSS"]}
          />
        </CardSec>

        <SkillSec id={"skills"} title={"Færdigheder"}>
          <SkillCard
            desc={
              "Jeg arbejder med React til at udvikle komponentbaserede webapplikationer. Jeg har erfaring med state management, props, hooks og brugergrænseflader, der er både funktionelle og nemme at vedligeholde."
            }
            img={<FaReact size={30} color="61DBFB" />}
            imgAlt={"Pic"}
            title={"React"}
          />

          <SkillCard
            desc={
              "JavaScript er mit primære værktøj til at skabe interaktive og dynamiske elementer på websider. Jeg har erfaring med alt fra DOM-manipulation til at bygge mindre applikationer med god kodepraksis."
            }
            img={<DiJavascript color="F0DB4F" />}
            imgAlt={"Pic"}
            title={"Javascript"}
          />

          <SkillCard
            desc={
              "Jeg bruger CSS til at skabe responsive og æstetiske brugerflader med fokus på layout, farver og typografi. Med SCSS arbejder jeg mere effektivt og struktureret gennem variabler, nesting og mixins."
            }
            img={<DiCss3 size={30} color="264de4" />}
            imgAlt={"Pic"}
            title={"CSS"}
          />

          <SkillCard
            desc={
              "Jeg har et solidt kendskab til semantisk og struktureret HTML, som danner fundamentet for alle mine webprojekter. Jeg fokuserer på tilgængelighed, klar struktur og et godt samarbejde med både CSS og JavaScript."
            }
            img={<DiHtml5 size={30} color="E34C26" />}
            imgAlt={"Pic"}
            title={"HTML"}
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
            info={"larsjulvistisen@gmail.com"}
            icon={<MdOutlineEmail size={60} />}
          />
        </ContactSec>
      </RightSec>
    </GeneralLayout>
  </StrictMode>
);
