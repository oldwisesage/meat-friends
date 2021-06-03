import Link from "next/link";
import styles from "../styles/Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <Link href="/">
          <a className={styles.text_link}>Some text that would be exciting</a>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
