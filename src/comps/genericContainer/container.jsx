import styles from "./container.module.css";

export default function container({ children, sidePadding }) {
  return (
    <>
      <div className={`${styles.con} ${sidePadding ? styles.sidePadding : ""}`}>
        {children}
      </div>
    </>
  );
}
