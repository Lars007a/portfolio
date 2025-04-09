import styles from "./container.module.css";

export default function container({ children, sidePadding, nav = false }) {
  return (
    <>
      <div
        className={`${styles.con} ${sidePadding ? styles.sidePadding : ""} ${
          nav ? styles.nav : ""
        }`}
      >
        {children}
      </div>
    </>
  );
}
