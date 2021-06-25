import Nav from "../comps/Nav";
import Foot from "../comps/Foot";
import styles from "./pic.module.scss";

const PicLayout = ({ children }) => {
  return (
    <div className={styles.content}>
      {/* <PicBackground /> */}
      <Nav />
      {children}
      <Foot />
    </div>
  );
};

export default PicLayout;
