import Image from "next/image";
import Link from "next/link";
import styles from "../styles/comps/ShopLanding.module.scss";

const ShopLanding = () => {
  return (
    <div className={styles.container}>
      <div className={styles.animals}>
        <div className={styles.animal}>
          <Link href="/meats/beef">
            <Image
              src="https://fakeimg.pl/300x300"
              className={styles.animal__img}
              width="200"
              height="200"
            />
          </Link>
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
