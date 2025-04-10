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
              <a href="#">Om mig</a>
            </li>
            <li>
              <a href="#">Eksempel projekter</a>
            </li>
            <li>
              <a href="#">Færdigheder</a>
            </li>
            <li>
              <a href="#">Kontakt mig</a>
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
                <IoDocumentTextOutline size={30} />
              </a>
              <a href="mailto:eksempel@eksempel.dk">
                <MdOutlineMail size={30} />
              </a>
              <a href="https://github.com/lars007a">
                <FaGithub size={30} />
              </a>
            </div>
            <a href="mailto:eksempel@eksempel.dk" className={styles.email}>
              eksempel@eksempel.dk
            </a>
            <p className="muted">© Copyright 2025</p>
          </footer>
        </nav>
      </section>
    </>
  );
}
