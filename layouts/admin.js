import styles from "./admin.module.scss";

const AdminLayout = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

export default AdminLayout;
