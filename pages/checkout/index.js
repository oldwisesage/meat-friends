import Checkout from '../../comps/checkout/Checkout';
import Heading from '../../comps/Heading';
import styles from './checkout.module.scss';

export default function CheckoutPage() {
  return (
    <div className={styles.container}>
      <Heading title="Checkout" subtitle="Please enter your payment details" />
      <Checkout />
    </div>
  );
}
