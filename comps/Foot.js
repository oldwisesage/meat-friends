// import Image from "next/image";
import styles from "../styles/Foot.module.scss";
import Link from "next/link";

const Foot = () => {
  return (
    <footer className={styles.foot}>
      <div className={styles.left}>
        <Link href="/">
          <a className={styles.link}>Word</a>
        </Link>
        <Link href="/">
          <a className={styles.link}>Word</a>
        </Link>
        <Link href="/">
          <a className={styles.link}>Word</a>
        </Link>
        <Link href="/">
          <a className={styles.link}>Word</a>
        </Link>
      </div>
      <div className={styles.logo}>
        <h1>meat friends</h1>
      </div>
      <div className={styles.right}>
        <Link href="/">
          <a className={styles.link}>Word</a>
        </Link>
        <Link href="/">
          <a className={styles.link}>Word</a>
        </Link>
        <Link href="/">
          <a className={styles.link}>Word</a>
        </Link>
        <Link href="/">
          <a className={styles.link}>Word</a>
        </Link>
        <Link href="/">
          <a className={styles.link}>Word</a>
        </Link>
      </div>
    </footer>
  );
};

export default Foot;
