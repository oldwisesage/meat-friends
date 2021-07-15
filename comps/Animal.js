import Image from 'next/image';
import Link from 'next/link';
import styles from './Animal.module.scss';

const Animal = ({ ...props }) => (
  <Link href="/meats/beef">
    <div className={styles.animal_card}>
      <div className={styles.animal_card_img} />
      <div className={styles.animal_card_title}>{props.title}</div>
    </div>
  </Link>
);

export default Animal;
