import Link from "next/link";
import Image from "next/image";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <h1 className={styles.logo_text}>meat friends</h1>
      </div>
      <div className={styles.nav}>
        <Link href="/shop">
          <a className={styles.nav_link}>shop</a>
        </Link>
        <Link href="/about">
          <a className={styles.nav_link}>about</a>
        </Link>
        <Link href="/contact">
          <a className={styles.nav_link}>contact</a>
        </Link>
        <Link href="/recipes">
          <a className={styles.nav_link}>recipes</a>
        </Link>
      </div>
      <div className={styles.account}>
        <Link href="/login">
          <a className={styles.account__login}>log in</a>
        </Link>
        <div className={styles.account__user}>
          <div className={styles.account__user_photo}></div>
          <div className={styles.account__user_name}>user</div>
        </div>
        <div className={styles.cart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-shopping-bag"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
