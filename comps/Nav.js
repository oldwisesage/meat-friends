import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <h1 className={styles.title}>meat friends</h1>
      </div>
      <div className={styles.links}>
        <Link href="/">
          <a className={styles.navlinks}>About</a>
        </Link>
        <Link href="/">
          <a className={styles.navlinks}>Shop</a>
        </Link>
        <Link href="/">
          <a className={styles.navlinks}>Philosophy</a>
        </Link>
        <Link href="/">
          <a className={styles.navlinks}>Contact</a>
        </Link>
      </div>
      <div className={styles.account}>
        <Link href="/">
          <a className={styles.account__login}>Log in</a>
        </Link>
        <div className={styles.account__user}>
          <Image
            src="https://fakeimg.pl/50x50
            "
            width="50"
            height="50"
            className={styles.account__user_photo}
          ></Image>
          <div className={styles.account__user_name}>User</div>
        </div>
        <div className={styles.cart}>
          <Image src="/1f6d2.png" width={50} height={50} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
