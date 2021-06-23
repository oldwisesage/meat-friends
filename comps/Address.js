import styles from "./Address.module.scss";

const Address = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.title_text}>Addresses</h1>
      </div>
      <div className={styles.address}>
        <div className={styles.address_top}>
          <h3 className={styles.address_top_name}>Address name</h3>
          <h3 className={styles.address_top_edit}>Edit</h3>
        </div>
        <div className={styles.address_body}>
          <p className={styles.address_body_name}>First Last</p>
          <p className={styles.address_body_address}>000 New World Order Rd.</p>
          <p className={styles.address_body_location}>
            New Meat City, ST 21703
          </p>
          <p className={styles.address_body_country}>United States</p>
        </div>
      </div>
      <div className={styles.address}>
        <div className={styles.address_top}>
          <h3 className={styles.address_top_name}>Address name</h3>
          <h3 className={styles.address_top_edit}>Edit</h3>
        </div>
        <div className={styles.address_body}>
          <p className={styles.address_body_name}>First Last</p>
          <p className={styles.address_body_address}>000 New World Order Rd.</p>
          <p className={styles.address_body_location}>
            New Meat City, ST 21703
          </p>
          <p className={styles.address_body_country}>United States</p>
        </div>
      </div>
      <div className={styles.addnew}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className={styles.addnew_icon}
        >
          ><line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        <p className={styles.addnew_text}>Add new address</p>
      </div>
    </div>
  );
};

export default Address;
