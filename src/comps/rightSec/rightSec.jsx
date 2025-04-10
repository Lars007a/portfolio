import styles from "./rightSec.module.css";
import Container from "../genericContainer/container";

export default function rightSec({ children }) {
  return (
    <div className={styles.sec}>
      <div className={styles.contentWrapper}>{children}</div>
    </div>
  );
}
