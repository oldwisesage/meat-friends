import Nav from "./Nav";
import Foot from "./Foot";
import Banner from "./Banner";
import Background from "./Background";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.content}>
      <Background />
      <Banner />
      <Nav />
      {children}
      <Foot />
    </div>
  );
};

export default Layout;
