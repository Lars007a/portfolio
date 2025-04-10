import styles from "./card.module.css";
import IconBtn from "../iconbtn/iconbtn.jsx";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Container from "../genericContainer/container.jsx";

export default function projCard({
  img,
  imgAlt,
  title,
  desc,
  demoLink,
  githubLink,
  badges = [],
}) {
  return (
    <>
      <article className={styles.projCard}>
        <div className={styles.content}>
          <div className={styles.imgBox}>
            <img src={img} alt={imgAlt} />
          </div>
          <div className={styles.secondBox}>
            <div className={styles.txtField}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
            <div className={styles.badges}>
              {badges.map((element, index) => {
                return (
                  <p className={styles.badge} key={index}>
                    {element}
                  </p>
                );
              })}
            </div>
            <div className={styles.btnBox}>
              <IconBtn
                text={"GitHub"}
                link={githubLink}
                Icon={<FaGithub size={20} />}
              />
              <IconBtn
                text={"Live Demo"}
                link={demoLink}
                Icon={<FiExternalLink size={20} />}
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
