import Link from 'next/link';
import styles from './FootLogo.module.scss';

export default function FootLogo({ ...props }) {
  return (
    <Link href="/">
      <div className={styles.logo}>
        <h1 className={styles.logo_text}>meat friends</h1>
        <p className={styles.logo_tagline}>{props.slogan}</p>
      </div>
    </Link>
  );
}
