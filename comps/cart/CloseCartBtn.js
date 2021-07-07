import { useCart } from '../../lib/cartState';
import styles from './CloseCartBtn.module.scss';

export default function CloseCartBtn() {
  const { closeCart } = useCart();
  return (
    <button type="button" onClick={closeCart} className={styles.btn}>
      Close cart
    </button>
  );
}
