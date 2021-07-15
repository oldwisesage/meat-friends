import Heading from '../Heading';
import AddNewButton from './AddNewButton';
import styles from './PaymentMethods.module.scss';
import PaymentMethodBtn from './PaymentMethodBtn';

// TODO add crud ability with this address situation

export default function PaymentMethods({ active }) {
  console.log(active);
  if (!active) return null;
  return (
    <div className={styles.container}>
      <Heading title="Payment Methods" />
      <PaymentMethodBtn />
      <AddNewButton text="payment method" />
    </div>
  );
}
