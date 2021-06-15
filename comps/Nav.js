import Link from "next/link";
import Image from "next/image";
import styles from "../styles/comps/Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <h1 className={styles.title}>meat friends</h1>
      </div>
      <div className={styles.nav}>
        <Link href="/shop">
          <a className={styles.nav__link}>Shop</a>
        </Link>
        <Link href="/about">
          <a className={styles.nav__link}>About</a>
        </Link>
        <Link href="/contact">
          <a className={styles.nav__link}>Contact</a>
        </Link>
      </div>
      <div className={styles.account}>
        <Link href="/login">
          <a className={styles.account__login}>Log in</a>
        </Link>
        <div className={styles.account__user}>
          <div className={styles.account__user_photo}></div>
          <div className={styles.account__user_name}>account</div>
        </div>
        <div className={styles.cart}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>basket</title>
            <path d="M29 14h-26c-0.553 0-1-0.447-1-1s0.447-1 1-1h2l6-11c0-0.553 0.447-1 1-1h2c0.553 0 1 0.447 1 1l-6 11h14l-6-11c0-0.553 0.447-1 1-1h3c0.553 0 1 0.447 1 1l5 11h2c0.553 0 1 0.447 1 1s-0.447 1-1 1zM3 16h26c0.553 0 1 0.447 1 1l-2 14c0 0.553-0.447 1-1 1h-22c-0.553 0-1-0.447-1-1l-2-14c0-0.553 0.447-1 1-1zM22 28h2c0.553 0 1-0.447 1-1l1-6c0-0.553-0.447-1-1-1h-2c-0.553 0-1 0.447-1 1l-1 6c0 0.553 0.447 1 1 1zM14 27c0 0.553 0.447 1 1 1h2c0.553 0 1-0.447 1-1v-6c0-0.553-0.447-1-1-1h-2c-0.553 0-1 0.447-1 1v6zM7 27c0 0.553 0.447 1 1 1h2c0.553 0 1-0.447 1-1l-1-6c0-0.553-0.447-1-1-1h-2c-0.553 0-1 0.447-1 1l1 6z"></path>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
