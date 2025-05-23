import styles from "./navigation.module.css";
import IconBtn from "../iconbtn/iconbtn";
import Container from "../genericContainer/container";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import cv from "../../assets/cv.pdf";
import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

export default function navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    if (isOpen == true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <section
        className={`${styles.navsec} ${isOpen ? styles.openHamburger : ""}`}
      >
        {isOpen == false ? (
          <RxHamburgerMenu onClick={toggle} className={styles.ham} />
        ) : (
          <RxCross1 onClick={toggle} className={styles.ham} />
        )}

        <nav>
          <header className={styles.intro}>
            <h1>Lars Jul Vistisen</h1>
            <p className="muted">
              Webudvikler studerende på medieskolerne i Viborg.
            </p>
          </header>
          <ul onClick={toggle}>
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
                link={cv}
                text={"CV"}
              />
            </li>
          </ul>

          <footer className="footer">
            <div className={styles.icons}>
              <a href={cv}>
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
