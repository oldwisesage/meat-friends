import styles from './no.module.scss';

const NoLayout = ({ children }) => (
  <div className={styles.content}>{children}</div>
);

export default NoLayout;
