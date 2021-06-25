import Nav from "../comps/Nav";
import Foot from "../comps/Foot";
import styles from "./default.module.scss";

const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.content}>
      <Nav />
      {children}
      <Foot />
    </div>
  );
};

export default DefaultLayout;
