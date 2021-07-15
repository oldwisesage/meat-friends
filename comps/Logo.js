import Link from 'next/link';
import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <Link href="/">
      <div className={styles.logo}>
        <h1 className={styles.logo_text}>meat friends</h1>
      </div>
    </Link>
  );
}
