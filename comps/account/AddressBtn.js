import styles from './AddressBtn.module.scss';

export default function AddressBtn() {
  return (
    <div className={styles.address}>
      <div className={styles.address_top}>
        <h3 className={styles.address_top_name}>Address name</h3>
        <button type="button" className={styles.address_top_edit}>
          Edit
        </button>
      </div>
      <div className={styles.address_body}>
        <p className={styles.address_body_name}>First Last</p>
        <p className={styles.address_body_address}>000 New World Order Rd.</p>
        <p className={styles.address_body_location}>New Meat City, ST 21703</p>
        <p className={styles.address_body_country}>United States</p>
      </div>
    </div>
  );
}
