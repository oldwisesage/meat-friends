import Nav from '../comps/nav/Nav';
import Foot from '../comps/nav/Foot';
import styles from './default.module.scss';

const DefaultLayout = ({ children }) => (
  <div className={styles.content}>
    <Nav />
    {children}
    <Foot />
  </div>
);

export default DefaultLayout;
