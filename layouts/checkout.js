import styles from "./admin.module.scss";

const CheckoutLayout = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

export default CheckoutLayout;
