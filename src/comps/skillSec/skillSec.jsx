import styles from "./skillSec.module.css";

export default function skillSec({ children, title, id }) {
  return (
    <>
      <div className={styles.introduc} id={id}>
        <h1>{title}</h1>
        <p className="muted" style={{ textAlign: "center" }}>
          Her kan du få et indblik i mine færdigheder indenfor webudvikling og
          design, hvor jeg fokuserer på at skabe brugervenlige og effektive
          løsninger.
        </p>
      </div>
      <section className={styles.projSec}>{children}</section>
    </>
  );
}
