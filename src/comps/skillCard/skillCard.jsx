import styles from "./skillCard.module.css";
import IconBtn from "../iconbtn/iconbtn.jsx";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Container from "../genericContainer/container.jsx";

export default function skillCard({ img, imgAlt, title, desc }) {
  return (
    <>
      <article className={styles.projCard}>
        <div className={styles.content}>
          <div className={styles.imgBox}>{img}</div>
          <div className={styles.txtField}>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        </div>
      </article>
    </>
  );
}
