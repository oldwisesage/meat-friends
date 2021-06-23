import Head from "next/head";
import Image from "next/image";
import styles from "./Landing.module.scss";
import Cta from "../comps/Cta";
import HowItWorks from "../comps/HowItWorks";
import ShopLanding from "../comps/ShopLanding";
import Who from "../comps/Who";

export default function Home() {
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
}
