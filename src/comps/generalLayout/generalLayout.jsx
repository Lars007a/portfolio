import styles from "./generalLayout.module.css";
import GenericContainer from "./../genericContainer/container.jsx";
import Nav from "../navigation/navigation.jsx";
import RightSec from "../rightSec/rightSec.jsx";

export default function generalLayout({ children }) {
  return (
    <>
      <GenericContainer sidePadding={true}>
        <div className={styles.content}>{children}</div>
      </GenericContainer>
    </>
  );
}
