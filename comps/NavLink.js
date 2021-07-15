import Link from 'next/link';
import styles from './NavLink.module.scss';

export default function NavLink({ link, text }) {
  return (
    <Link href={`/${link}`}>
      <a className={styles.link}>{text}</a>
    </Link>
  );
}
