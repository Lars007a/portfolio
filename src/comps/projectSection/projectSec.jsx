import styles from "./projectSec.module.css";

export default function projSec({ children, title, id }) {
  return (
    <>
      <div className={styles.introduc} id={id}>
        <h1>{title}</h1>
      </div>
      <section className={styles.projSec}>{children}</section>
    </>
  );
}
