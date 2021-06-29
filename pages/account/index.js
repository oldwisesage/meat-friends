import OrderHistory from '../../comps/OrderHistory';
import Address from '../../comps/Address';
import styles from './account.module.scss';

// TODO implement functionality, backend connection

const Account = () => (
  <div className={styles.container}>
    <div className={styles.container_acc}>
      <div className={styles.heading}>
        <h1 className={styles.heading_title}>Hello Sage!</h1>
        <h3 className={styles.heading_subtitle}>sage.m.winn@gmail.com</h3>
      </div>
      <div className={styles.container_nav}>
        <div className={styles.nav}>
          <div className={styles.nav_btn}>
            <p
              className={`${styles.nav_btn_click} ${styles.nav_btn_click_active}`}
            >
              Order History
            </p>
          </div>
          <div className={styles.nav_btn}>
            <p className={styles.nav_btn_click}>Personal Information</p>
          </div>
          <div className={styles.nav_btn}>
            <p className={styles.nav_btn_click}>Addresses</p>
          </div>
          <div className={styles.nav_btn}>
            <p className={styles.nav_btn_click}>Payment Methods</p>
          </div>
          <div className={styles.nav_btn}>
            <p className={styles.nav_btn_click}>Settings</p>
          </div>
          <div className={styles.nav_btn}>
            <p className={styles.nav_btn_click}>Logout</p>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.container_comp}>
      {/* <OrderHistory /> */}
      {/* PERSONAL INFORMATION */}

      <Address />
      {/* PAYMENT METHODS */}
      {/* SETTINGS */}
      {/* LOG OUT */}
    </div>
  </div>
);

Account.layout = 'default';

export default Account;
