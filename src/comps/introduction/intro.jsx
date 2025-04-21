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
              Velkommen til min portfolio! Mit navn er Lars Jul Vistisen, og jeg
              er en passioneret webudvikler med fokus på frontend-teknologier
              som HTML, CSS, JavaScript og React. Jeg har en stærk interesse for
              at skabe moderne, responsive og brugervenlige hjemmesider, der
              giver en fremragende brugeroplevelse. Min rejse som webudvikler
              startede, da jeg meldte mig ind på webudvikler uddannelse på
              Medieskolerne, hvor jeg har udviklet både mine tekniske
              færdigheder samt erhvervet en dyb forståelse for webdesign og
              diverse webteknologier.
            </p>
          </div>
          <div className={styles.imgBox}>
            <RoundImg alt={"Lars"} pic={pic} />
          </div>
        </div>
        <p>
          I denne portfolio kan du finde nogle af mine projekter, hvor jeg har
          anvendt mine færdigheder til at bygge funktionelle og æstetisk
          tiltalende løsninger. Jeg håber, du finder inspiration og værdi i mine
          projekter, og ser frem til at samarbejde med jer ud i fremtiden på
          diverse projekter.
        </p>
      </div>
    </>
  );
}
