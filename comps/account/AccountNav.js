import styles from './AccountNav.module.scss';

export default function AccountNav() {
  return (
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
  );
}
