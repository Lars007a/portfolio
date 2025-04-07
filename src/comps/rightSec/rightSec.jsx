import styles from "./rightSec.module.css";

export default function rightSec({ children }) {
  return (
    <div className={styles.sec}>
      <div className={styles.contentWrapper} style={{ overflowY: "auto" }}>
        {children}
      </div>
    </div>
  );
}
