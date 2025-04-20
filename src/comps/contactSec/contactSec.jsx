import styles from "./contactSec.module.css";
import Container from "../genericContainer/container.jsx";

export default function contactSec({ children, title, id }) {
  return (
    <>
      <div className={styles.box} id={id}>
        <div className={styles.intro}>
          <h1>{title}</h1>
          <p className="muted">
            Tøv ikke med at kontakte mig for spørgsmål, samarbejde eller andet.
            Jeg ser frem til at høre fra dig/jer!
          </p>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
}
