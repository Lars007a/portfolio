import styles from "./navigation.module.css";
import IconBtn from "../iconbtn/iconbtn";
import Container from "../genericContainer/container";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export default function navigation() {
  return (
    <>
      <section className={styles.navsec}>
        <nav>
          <header className={styles.intro}>
            <h1>Lars Jul Vistisen</h1>
            <p className="muted">
              Webudvikler studerende på medieskolerne i Viborg.
            </p>
          </header>
          <ul>
            <li>
              <a href="#intro">Om mig</a>
            </li>
            <li>
              <a href="#projects">Eksempel projekter</a>
            </li>
            <li>
              <a href="#skills">Færdigheder</a>
            </li>
            <li>
              <a href="#contact">Kontakt mig</a>
            </li>
            <li>
              <IconBtn
                Icon={<IoDocumentTextOutline size={20} />}
                link={"#"}
                text={"CV"}
              />
            </li>
          </ul>

          <footer className="footer">
            <div className={styles.icons}>
              <a href="#">
                <IoDocumentTextOutline size={25} />
              </a>
              <a href="mailto:larsjulvistisen@gmail.com">
                <MdOutlineMail size={25} />
              </a>
              <a href="https://github.com/lars007a">
                <FaGithub size={25} />
              </a>
            </div>
            <a href="mailto:larsjulvistisen@gmail.com" className={styles.email}>
              larsjulvistisen@gmail.com
            </a>
            <p className="muted">© Copyright 2025</p>
          </footer>
        </nav>
      </section>
    </>
  );
}
