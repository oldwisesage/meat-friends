import OrderHistory from '../../comps/OrderHistory';
import Address from '../../comps/Address';
import styles from './account.module.scss';
import useUser from '../../comps/User';

// TODO add dynamic routing to logout, orders, payment, personal, settings

export default function Account() {
  const me = useUser();
  if (!me) return null;
  return (
    <div className={styles.container}>
      <div className={styles.container_acc}>
        <div className={styles.heading}>
          <h1 className={styles.heading_title}>Hello Sage!</h1>
          <h3 className={styles.heading_subtitle}>sage.m.winn@gmail.com</h3>
        </div>
        {/* COMP <AccountNav /> */}
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
        <OrderHistory id={me.id} />
        {/* COMP PERSONAL INFORMATION */}
        {/* COMP <Address /> */}
        {/* COMP PAYMENT METHODS */}
        {/* COMP SETTINGS */}
        {/* COMP LOG OUT */}
      </div>
    </div>
  );
}

Account.layout = 'default';
