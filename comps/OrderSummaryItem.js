import Image from 'next/image';
import formatMoney from '../lib/formatMoney';
import styles from './OrderSummaryItem.module.scss';

export default function OrderSummaryItem({ orderItem }) {
  return (
    <div className={styles.item}>
      <Image
        src={orderItem.photo.image.publicUrlTransformed}
        width="70"
        height="70"
        className={styles.item_img}
      />
      <div className={styles.info}>
        <div className={styles.info_cut}>
          <p className={styles.info_name}>{orderItem.name}</p>
          <p className={styles.info_price}>
            {orderItem.quantity} x {formatMoney(orderItem.price)}
          </p>
        </div>
        <p className={styles.info_total}>
          {formatMoney(orderItem.price * orderItem.quantity)}
        </p>
      </div>
    </div>
  );
}
