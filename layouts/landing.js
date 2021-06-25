import Nav from "../comps/Nav";
import Foot from "../comps/Foot";
import Banner from "../comps/Banner";
import Background from "../comps/Background";
import styles from "./landing.module.scss";

const LandingLayout = ({ children }) => {
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

export default LandingLayout;
