import styles from "./contact.module.css";

export default function contactCard({ icon, title, info }) {
  return (
    <div className={styles.box}>
      <article className={styles.article}>
        {icon}
        <h4>{title}</h4>
        <p>{info}</p>
      </article>
    </div>
  );
}
