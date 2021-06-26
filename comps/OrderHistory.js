import OrderItem from './OrderItem';
import styles from './OrderHistory.module.scss';

// TODO connect to backend

const OrderHistory = () => (
  <div className={styles.container}>
    <div className={styles.title}>
      <h1 className={styles.title_text}>Order History</h1>
    </div>
    <div className={styles.body}>
      <div className={styles.body_head}>
        <h4 className={styles.body_head_text}>Order</h4>
        <h4 className={styles.body_head_text}>Date</h4>
        <h4 className={styles.body_head_text}>Status</h4>
        <h4 className={styles.body_head_text}>Total</h4>
      </div>
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
    </div>
  </div>
);

export default OrderHistory;
