import Image from 'next/image';
import formatMoney from '../lib/formatMoney';
import styles from './CartItem.module.scss';
import RemoveFromCart from './RemoveFromCart';

export default function CartItem({ cartItem }) {
  const { cut } = cartItem;

  return (
    <div className={styles.item}>
      <Image
        src={cut.photo.image.publicUrlTransformed}
        width="70"
        height="70"
        className={styles.item_img}
      />
      <div className={styles.info}>
        <div className={styles.info_cut}>
          <p className={styles.info_name}>{cut.name}</p>
          <p className={styles.info_price}>
            {cartItem.quantity} x {formatMoney(cut.price)}
          </p>
        </div>
        <p className={styles.info_total}>
          {formatMoney(cut.price * cartItem.quantity)}
        </p>
        <RemoveFromCart id={cartItem.id} />
      </div>
    </div>
  );
}
