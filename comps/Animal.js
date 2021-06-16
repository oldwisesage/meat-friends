import Image from "next/image";
import Link from "next/link";
import styles from "./Animal.module.scss";

const Animal = () => {
  return (
    <div className={styles.animal}>
      <Link href="/meats/beef">
        <Image
          src="/../public/placeholder.png"
          className={styles.animal__img}
          width="300"
          height="300"
        />
      </Link>
      <h3 className={styles.animal_title}>Beef</h3>
    </div>
  );
};

export default Animal;
