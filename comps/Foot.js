// import Image from "next/image";
import styles from "../styles/Foot.module.scss";
import Link from "next/link";

const Foot = () => {
  return (
    <footer className={styles.foot}>
      <div className={styles.foot__left}>
        <Link href="/">
          <a className={styles.foot__link}>Word</a>
        </Link>
        <Link href="/">
          <a className={styles.foot__link}>Word</a>
        </Link>
        <Link href="/">
          <a className={styles.foot__link}>Word</a>
        </Link>
        <Link href="/">
          <a className={styles.foot__link}>Word</a>
        </Link>
      </div>
      <div className={styles.foot__logo}>
        <h1>meat friends</h1>
      </div>
      <div className={styles.foot__right}>
        <Link href="/">
          <a className={styles.foot__link}>Word</a>
        </Link>
        <Link href="/">
          <a className={styles.foot__link}>Word</a>
        </Link>
        <Link href="/">
          <a className={styles.foot__link}>Word</a>
        </Link>
        <Link href="/">
          <a className={styles.foot__link}>Word</a>
        </Link>
        <Link href="/">
          <a className={styles.foot__link}>Word</a>
        </Link>
      </div>
    </footer>
  );
};

export default Foot;
