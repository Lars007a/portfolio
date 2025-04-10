import styles from "./contactSec.module.css";
import Container from "../genericContainer/container.jsx";

export default function contactSec({ children, title, id }) {
  return (
    <>
      <div className={styles.box} id={id}>
        <div className={styles.intro}>
          <h1>{title}</h1>
          <p className="muted">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            quibusdam.
          </p>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
}
