import styles from "./roundImage.module.css";

export default function roundImg({ pic, alt }) {
  return <img className={styles.box} src={pic} alt={alt} />;
}
