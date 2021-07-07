import styles from './admin.module.scss';

const AdminLayout = ({ children }) => (
  <div className={styles.content}>{children}</div>
);

export default AdminLayout;
