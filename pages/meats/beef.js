import Link from "next/link";
import Image from "next/image";
import Cut from "../../comps/Cut";
import styles from "./Beef.module.scss";

const Beef = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sub_container}>
        <div className={styles.title}>
          <h1 className={styles.title_heading}>Beef</h1>
          <h3 className={styles.title_subheading}>Locally sourced beef</h3>
        </div>
        <div className={styles.card_container}>
          <h1 className={styles.card_container_subtitle}>Steaks</h1>
          <Cut />
          <Cut />
          <Cut />
        </div>
        <div className={styles.card_container}>
          <h1 className={styles.card_container_subtitle}>Roasts</h1>
          <Cut />
          <Cut />
          <Cut />
        </div>
        <div className={styles.card_container}>
          <h1 className={styles.card_container_subtitle}>Ground</h1>
          <Cut />
          <Cut />
          <Cut />
        </div>
        <div className={styles.card_container}>
          <h1 className={styles.card_container_subtitle}>Sausage</h1>
          <Cut />
          <Cut />
          <Cut />
        </div>
      </div>
    </div>
  );
};

export default Beef;
