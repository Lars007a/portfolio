import styles from "./rightSec.module.css";

export default function rightSec({ children }) {
  return <div className={styles.sec}>{children}</div>;
}
