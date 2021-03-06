import Heading from '../comps/Heading';
import styles from './Payment.module.scss';

const Payment = () => (
  <div className={styles.container}>
    <Heading title="Payment Methods" />
    <div className={styles.payment}>
      <div className={styles.payment_top}>
        <h3 className={styles.payment_top_name}>Payment name</h3>
        <h3 className={styles.payment_top_edit}>Edit</h3>
      </div>
      <div className={styles.payment_body}>
        <div className={styles.payment_body_type}>
          <svg
            width="50pt"
            height="50pt"
            version="1.1"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.payment_body_type_icon}
          >
            <path d="m6.25 15.625c-1.7266 0-3.125 1.3984-3.125 3.125v62.5c0 1.7266 1.3984 3.125 3.125 3.125h87.5c1.7266 0 3.125-1.3984 3.125-3.125v-62.5c0-1.7266-1.3984-3.125-3.125-3.125zm18.75 9.375c1.6562 0 3.2344 0.34766 4.6875 0.94141 1.4531-0.59375 3.0312-0.94141 4.6875-0.94141 6.8672 0 12.5 5.6328 12.5 12.5s-5.6328 12.5-12.5 12.5c-1.6562 0-3.2344-0.34766-4.6875-0.94141-1.4531 0.59375-3.0312 0.94141-4.6875 0.94141-6.8672 0-12.5-5.6328-12.5-12.5s5.6328-12.5 12.5-12.5zm28.125 3.125h28.125c4.2266-0.058594 4.2266 6.3086 0 6.25h-28.125c-4.2266 0.058594-4.2266-6.3086 0-6.25zm-17.273 3.3203c1.0156 1.8047 1.6484 3.8516 1.6484 6.0547s-0.63281 4.25-1.6484 6.0547c2.7539-0.65625 4.7734-3.082 4.7734-6.0547s-2.0195-5.3984-4.7734-6.0547zm17.273 6.0547h28.125c4.2266-0.058594 4.2266 6.3086 0 6.25h-28.125c-4.2266 0.058594-4.2266-6.3086 0-6.25zm-37.5 28.125h31.25c4.2266-0.058594 4.2266 6.3086 0 6.25h-31.25c-4.2266 0.058594-4.2266-6.3086 0-6.25z" />
          </svg>
        </div>
        <div className={styles.payment_body_info}>
          <div className={styles.payment_body_info_mode}>VISA</div>
          <div className={styles.payment_body_info_num}>
            **** **** **** 1234
          </div>
        </div>
        <div className={styles.payment_body_address}>
          <p className={styles.payment_body_address_text}>Address name</p>
        </div>
      </div>
    </div>
    <div className={styles.addnew}>
      <p className={styles.addnew_text}>Add new payment</p>
    </div>
  </div>
);
export default Payment;
