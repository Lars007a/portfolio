import styles from "./intro.module.css";
import RoundImg from "../roundImage/roundImage.jsx";

export default function intro({ id, pic }) {
  return (
    <>
      <div className={styles.intro} id={id}>
        <h1 className="">Om mig</h1>
        <div className={styles.dual}>
          <div>
            <p>
              Velkommen til min portfolio! Jeg er Lars Jul Vistisen, en
              passioneret webudvikler med fokus på frontend-teknologier som
              HTML, CSS, JavaScript og React. Jeg har en stærk interesse for at
              skabe moderne, responsive og brugervenlige hjemmesider, der giver
              en fremragende brugeroplevelse. Min rejse som webudvikler startede
              med min uddannelse på Medieskolerne, hvor jeg har udviklet både
              tekniske færdigheder og en dyb forståelse for webdesign og
              interaktivitet.
            </p>
          </div>
          <div className={styles.imgBox}>
            <RoundImg alt={"Lars"} pic={pic} />
          </div>
        </div>
        <p>
          I denne portfolio kan du finde eksempler på mine projekter, hvor jeg
          har anvendt mine færdigheder til at bygge funktionelle og æstetisk
          tiltalende løsninger. Hver opgave afspejler min tilgang til
          problemløsning, design og kodning, og hvordan jeg stræber efter at
          levere højkvalitetsarbejde, der både er skalerbart og brugervenligt.
        </p>
        <p>
          Jeg håber, du finder inspiration og værdi i mine projekter, og ser
          frem til at samarbejde med jer på fremtidige webudviklingsprojekter.
        </p>
      </div>
    </>
  );
}
