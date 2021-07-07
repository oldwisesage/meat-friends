import formatMoney from '../../lib/formatMoney';
import styles from './OrderSummary.module.scss';
import OrderSummaryItem from './OrderSummaryItem';

export default function OrderSummary({ orderData }) {
  const order = orderData;
  const orderItems = order.items;
  const taxes = order.total * 0.05;
  const shipping = 1000;
  const total = taxes + shipping + order.total;
  return (
    <div className={styles.summary_container}>
      <div className={styles.summary_info}>
        <div className={styles.info_layer}>
          <div className={styles.order_num_container}>
            <h3 className={styles.order_number_title}>Order #</h3>
            <p className={styles.order_number}>12jdklsaf98439f0d</p>
          </div>
          <div className={styles.summary_info_date}>
            <h3 className={styles.summmary_info_date_title}>Order date</h3>
            <p className={styles.summmary_info_date_info}>11/1/1991</p>
          </div>
          <div className={styles.summary_info_shipaddress}>
            <h3 className={styles.summmary_info_shipaddress_title}>
              Shipping address
            </h3>
            <p className={styles.summmary_info_shipaddress_info}>
              Address title here
            </p>
          </div>
        </div>
        <div className={styles.pay_layer}>
          <div className={styles.summary_info_payaddress}>
            <h3 className={styles.summmary_info_payaddress_title}>
              Payment address
            </h3>
            <p className={styles.summmary_info_payaddress_info}>
              Address title here
            </p>
          </div>
          <div className={styles.summary_info_payment}>
            <h3 className={styles.summmary_info_payment_title}>
              Payment Method
            </h3>
            <p className={styles.summmary_info_payment_info}>VISA 8422</p>
          </div>
        </div>
      </div>
      {orderItems.map((orderItem) => (
        <OrderSummaryItem key={orderItem.id} orderItem={orderItem} />
      ))}
      <div className={styles.order_subtotal}>
        <p className={styles.order_subtotal_title}>Subtotal</p>
        <p className={styles.order_subtotal_number}>
          {formatMoney(order.total)}
        </p>
        <p className={styles.order_subtotal_title}>Taxes</p>
        <p className={styles.order_subtotal_number}>{formatMoney(taxes)}</p>
        <p className={styles.order_subtotal_title}>Shipping</p>
        <p className={styles.order_subtotal_number}>{formatMoney(shipping)}</p>
      </div>
      <div className={styles.order_total}>
        <h3 className={styles.order_total_title}>Total</h3>
        <h3 className={styles.order_total_number}>{formatMoney(total)}</h3>
      </div>
    </div>
  );
}
