import styles from "./err.module.scss";

const ErrLayout = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default ErrLayout;
