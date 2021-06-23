import Head from "next/head";
import Image from "next/image";
import Cta from "../comps/Cta";
import HowItWorks from "../comps/HowItWorks";
import ShopLanding from "../comps/ShopLanding";
import Who from "../comps/Who";
import styles from "./landing.module.scss";

const Home = () => {
  return (
    <div>
      <head></head>
      <main>
        <div className={styles.container}>
          <Cta />
          <ShopLanding />
          <HowItWorks />
          <Who />
        </div>
      </main>
    </div>
  );
};

Home.layout = "landing";

export default Home;
