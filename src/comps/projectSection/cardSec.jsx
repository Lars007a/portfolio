import styles from "./cardSec.module.css";

export default function projSec({ children, title, id }) {
  return (
    <>
      <div className={styles.introduc} id={id}>
        <h1>{title}</h1>
        <p className="muted" style={{ textAlign: "center" }}>
          Udforsk mine projekter, der demonstrerer min tekniske kunnen og
          kreative løsninger indenfor webudvikling og design.
        </p>
      </div>
      <section className={styles.projSec}>{children}</section>
    </>
  );
}
