import styles from "./no.module.scss";

const NoLayout = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

export default NoLayout;
