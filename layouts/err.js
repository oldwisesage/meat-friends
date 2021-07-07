import styles from './err.module.scss';

const ErrLayout = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default ErrLayout;
