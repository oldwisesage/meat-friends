import Link from 'next/link';
import styles from './CheckoutBtn.module.scss';

export default function CheckoutBtn() {
  return (
    <Link href="/checkout">
      <button type="button" className={styles.btn}>
        Checkout
      </button>
    </Link>
  );
}
