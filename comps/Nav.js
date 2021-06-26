import Link from 'next/link';
import Image from 'next/image';
import styles from './Nav.module.scss';

const Nav = () => (
  <nav className={styles.container}>
    <div className={styles.logo}>
      <h1 className={styles.logo_text}>meat friends</h1>
    </div>
    <Link href="/shop">
      <a className={styles.link}>shop</a>
    </Link>
    <Link href="/about">
      <a className={styles.link}>about</a>
    </Link>
    <Link href="/contact">
      <a className={styles.link}>contact</a>
    </Link>
    <Link href="/add">
      <a className={styles.link}>add</a>
    </Link>
    {/* TODO add recipes page */}
    {/* <Link href="/recipes">
      <a className={styles.link}>recipes</a>
    </Link> */}
    <div className={styles.account}>
      <Link href="/login">
        <a className={styles.account__login}>log in</a>
      </Link>
      <div className={styles.account__user}>
        <div className={styles.account__user_photo} />
        <div className={styles.account__user_name}>user</div>
      </div>
      <div className={styles.cart}>
        <svg
          width="40pt"
          height="40pt"
          version="1.1"
          viewBox="0 3 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.cart_icon}
        >
          <path d="m83.531 35.344c-0.59375-0.625-1.4375-0.96875-2.2812-0.96875h-9.375v-9.375c0-5.875-2.2812-11.375-6.4062-15.438-4.0938-4.1562-9.5938-6.4375-15.469-6.4375-12.062 0-21.875 9.8125-21.875 21.875v9.375h-9.375c-0.84375 0-1.6875 0.34375-2.2812 0.96875s-0.90625 1.4688-0.84375 2.3125l0.65625 12.5c0 0.0625 0.03125 0.125 0.0625 0.1875l2.4062 43.594c0.09375 1.6562 1.4688 2.9375 3.125 2.9375h56.25c1.6562 0 3.0312-1.2812 3.125-2.9375l2.4688-43.75 0.65625-12.5c0.03125-0.875-0.28125-1.7188-0.84375-2.3438zm-49.156-10.344c0-8.625 7-15.625 15.625-15.625 4.1875 0 8.0938 1.625 11.062 4.5938 2.9375 2.9375 4.5625 6.8438 4.5625 11.031v9.375h-31.25zm-3.125 15.625h46.719l-0.34375 6.25h-55.219l-0.34375-6.25zm-6.4062 50-2.0938-37.5h54.531l-2.0938 37.5z" />
        </svg>
      </div>
    </div>
  </nav>
);

export default Nav;
