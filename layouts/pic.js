import Nav from '../comps/nav/Nav';
import Foot from '../comps/nav/Foot';
import styles from './pic.module.scss';

const PicLayout = ({ children }) => (
  <div className={styles.content}>
    {/* COMP <PicBackground /> */}
    <Nav />
    {children}
    <Foot />
  </div>
);

export default PicLayout;
