import styles from "./OrderItem.module.scss";

const OrderItem = () => {
  return (
    <div className={styles.item}>
      <div className={styles.item_num}>288394</div>
      <div className={styles.item_date}>6/9/2021</div>
      <div className={`${styles.item_status} ${styles.item_status_complete}`}>
        complete
      </div>
      <div className={styles.item_total}>$124.92</div>
      <div className={styles.item_arrow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    </div>
  );
};

export default OrderItem;
