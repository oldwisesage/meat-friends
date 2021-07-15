import styles from './PaymentMethodBtn.module.scss';

export default function PaymentMethodBtn() {
  return (
    <div className={styles.payment}>
      <div className={styles.payment_top}>
        <h3 className={styles.payment_top_name}>Payment method name</h3>
        <button type="button" className={styles.payment_top_edit}>
          Edit
        </button>
      </div>
      <div className={styles.payment_container}>
        <div className={styles.payment_info}>
          <p className={styles.payment_info_card}>
            <span className={styles.payment_info_label}>Type: </span>VISA
          </p>
          <p className={styles.payment_info_number}>
            <span className={styles.payment_info_label}>Number: </span>
            **** **** **** 4242
          </p>
          <p className={styles.payment_info_exp}>
            <span className={styles.payment_info_label}>Exp date: </span>04/24
          </p>
          <p className={styles.payment_info_cvc}>
            <span className={styles.payment_info_label}>CVC: </span>223
          </p>
        </div>
        <div className={styles.payment_body}>
          <p className={styles.payment_body_name}>First Last</p>
          <p className={styles.payment_body_payment}>000 New World Order Rd.</p>
          <p className={styles.payment_body_location}>
            New Meat City, ST 21703
          </p>
          <p className={styles.payment_body_country}>United States</p>
        </div>
      </div>
    </div>
  );
}
