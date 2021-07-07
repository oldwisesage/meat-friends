import Nav from '../comps/nav/Nav';
import Foot from '../comps/nav/Foot';
import Banner from '../comps/landing/Banner';
import Background from '../comps/landing/Background';
import styles from './landing.module.scss';

const LandingLayout = ({ children }) => (
  <div className={styles.content}>
    <Background />
    <Banner />
    <Nav />
    {children}
    <Foot />
  </div>
);

export default LandingLayout;
