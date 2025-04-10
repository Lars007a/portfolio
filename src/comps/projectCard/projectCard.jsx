import styles from "./projectCard.module.css";
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
        <img src={img} alt={imgAlt} />
        <div className={styles.content}>
          <div className={styles.txtField}>
            <h4>{title}</h4>
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
            <IconBtn text={"GitHub"} link={githubLink} Icon={<FaGithub />} />
            <IconBtn
              text={"Live Demo"}
              link={demoLink}
              Icon={<FiExternalLink />}
            />
          </div>
        </div>
      </article>
    </>
  );
}
