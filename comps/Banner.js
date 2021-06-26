import Link from 'next/link';
import styles from './Banner.module.scss';

const Banner = () => (
  <div className={styles.container}>
    <div className={styles.text}>
      <Link href="/">
        <a className={styles.text_link}>Some text that would be exciting</a>
      </Link>
    </div>
  </div>
);

export default Banner;
