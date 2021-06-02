import styles from "../styles/ShopLanding.module.scss";
import Image from "next/image";

const ShopLanding = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Section 2 - Shop</h1>.
      <div className={styles.animals}>
        <div className={styles.animal}>
          <Image
            src="https://fakeimg.pl/300x300"
            className={styles.animal__img}
            width="200"
            height="200"
          />
          <button className={styles.animal__btn}>Shop pork</button>
        </div>
        <div className={styles.animal}>
          <Image
            src="https://fakeimg.pl/300x300"
            className={styles.animal__img}
            width="200"
            height="200"
          />
          <button className={styles.animal__btn}>Shop beef</button>
        </div>
        <div className={styles.animal}>
          <Image
            src="https://fakeimg.pl/300x300"
            className={styles.animal__img}
            width="200"
            height="200"
          />
          <button className={styles.animal__btn}>Shop chix</button>
        </div>
      </div>
    </div>
  );
};

export default ShopLanding;
