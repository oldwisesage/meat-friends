import Image from 'next/image';
import Link from 'next/link';
import formatMoney from '../lib/formatMoney';
import styles from './Cut.module.scss';

const Cut = ({ cut }) => (
  <Link href="/meats/cut">
    <div className={styles.container}>
      <div className={styles.img}>
        <img
          src={cut?.photo?.image?.publicUrlTransformed}
          alt={cut.name}
          className={styles.img_content}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.content_title}>{cut.name}</div>
        <p className={styles.content_price}>{formatMoney(cut.price)}</p>
      </div>
    </div>
  </Link>
);

export default Cut;
