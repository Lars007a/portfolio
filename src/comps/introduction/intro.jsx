import styles from "./intro.module.css";
import RoundImg from "../roundImage/roundImage.jsx";

export default function intro({ id, pic }) {
  return (
    <>
      <div className={styles.intro} id={id}>
        <h1 className="">Om mig</h1>
        <div className={styles.dual}>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto nisi alias aliquam sunt, eum dolore nihil adipisci modi
              assumenda nam. Illum dolorem sapiente ipsam quisquam? Nihil sit
              sed maxime quibusdam in dolor possimus quos molestiae magni
              dolorem at, omnis commodi non corrupti assumenda aut fugiat
              consectetur accusamus nobis, cupiditate aspernatur voluptas earum
              maiores? omnis commodi non corrupti assumenda aut fugiat
              consectetur accusamus nobis, cupiditate aspernatur voluptas earum
              maiores? omnis commodi non corrupti assumenda aut fugiat
              consectetur accusamus nobis, cupiditate aspernatur voluptas earum
              maiores?
            </p>
          </div>
          <div className={styles.imgBox}>
            <RoundImg alt={"Lars"} pic={pic} />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
          debitis ea incidunt, exercitationem a quia fugit nesciunt, sequi
          molestias temporibus voluptates error officia sit minus tempore quae
          ratione? Porro fugit in modi itaque dolor quo quod veniam. Quo nulla
          architecto nesciunt. Expedita, beatae? Excepturi at debitis sed quidem
          eaque repellat odio, porro fugit ab, totam saepe pariatur eligendi
          quis eius exercitationem ipsa? Quae repellendus praesentium est
          necessitatibus.
        </p>
      </div>
    </>
  );
}
