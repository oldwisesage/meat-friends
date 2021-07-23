import AnimalsSection from '../comps/landing/AnimalsSection';
import Cta from '../comps/landing/CallToAction';
import HowItWorksSection from '../comps/landing/HowItWorksSection';
import Who from '../comps/landing/Who';
import styles from './landing.module.scss';

const Home = () => (
  <div>
    <main>
      <div className={styles.container}>
        <Cta />
        <HowItWorksSection />
        <AnimalsSection />
        <Who />
      </div>
    </main>
  </div>
);

Home.layout = 'default';

export default Home;
