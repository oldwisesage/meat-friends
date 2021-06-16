import Image from "next/image";
import Link from "next/link";
import styles from "./Cut.module.scss";

const Cut = () => {
  return (
    <Link href="/meats/beef/cut">
      <div className={styles.container && styles.image}>
        <div className={styles.content}>
          <Image
            src="https://fakeimg.pl/250x250"
            width="250"
            height="250"
            className={styles.content_img}
          />
          <div className={styles.content_container}>
            <div className={styles.content_title}>Bone in Ribeye</div>
            <p className={styles.content_price}>$45</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cut;
