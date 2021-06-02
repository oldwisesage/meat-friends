import styles from "../styles/ShopLanding.module.scss";
import Image from "next/image";

const ShopLanding = () => {
  return (
    <div className={styles.container}>
      <div className={styles.animals}>
        <div className={styles.animal}>
          <Image
            src="https://fakeimg.pl/300x300"
            className={styles.animal__img}
            width="200"
            height="200"
          />
        </div>
        <div className={styles.animal}>
          <Image
            src="https://fakeimg.pl/300x300"
            className={styles.animal__img}
            width="200"
            height="200"
          />
        </div>
        <div className={styles.animal}>
          <Image
            src="https://fakeimg.pl/300x300"
            className={styles.animal__img}
            width="200"
            height="200"
          />
        </div>
        <div className={styles.animal}>
          <Image
            src="https://fakeimg.pl/300x300"
            className={styles.animal__img}
            width="200"
            height="200"
          />
        </div>
      </div>
    </div>
  );
};

export default ShopLanding;
