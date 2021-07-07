import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import formatMoney from '../../lib/formatMoney';
import styles from './OrderHistoryItem.module.scss';

export default function OrderHistoryItem({ order }) {
  const { id, total } = order;

  return (
    <Link href={`/order/${id}`}>
      <div className={styles.item}>
        <div className={styles.item_num}>{id}</div>
        <div className={styles.item_date}>6/9/2021</div>
        <div className={`${styles.item_status} ${styles.item_status_complete}`}>
          complete
        </div>
        <div className={styles.item_total}>{formatMoney(total)}</div>
        <div className={styles.item_arrow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
