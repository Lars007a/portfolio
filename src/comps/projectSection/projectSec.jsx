import styles from "./projectSec.module.css";

export default function projSec({ children, title, id }) {
  return (
    <>
      <div className={styles.introduc} id={id}>
        <h1>{title}</h1>
        <p className="muted" style={{ textAlign: "center" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque et
          expedita quae architecto minus harum nostrum numquam adipisci
          doloremque tempora.
        </p>
      </div>
      <section className={styles.projSec}>{children}</section>
    </>
  );
}
