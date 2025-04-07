import styles from "./iconbtn.module.css";

export default function iconBtn({ link, text, Icon }) {
  return (
    <>
      <a href={link} className={styles.btn}>
        {Icon}
        {text}
      </a>
    </>
  );
}
