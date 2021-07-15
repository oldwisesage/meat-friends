import Head from 'next/head';
import Image from 'next/image';
import Cta from '../comps/landing/Cta';
import HowItWorks from '../comps/landing/HowItWorks';
import ShopLanding from '../comps/landing/ShopLanding';
import Who from '../comps/landing/Who';
import styles from './landing.module.scss';

const Home = () => (
  <div>
    <main>
      <div className={styles.container}>
        <Cta />
        <HowItWorks />
        <ShopLanding />
        <Who />
      </div>
    </main>
  </div>
);

Home.layout = 'landing';

export default Home;
