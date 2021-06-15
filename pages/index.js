import Head from "next/head";
import Image from "next/image";
import styles from "../styles/pages/Landing.module.scss";
import ShopLanding from "../comps/ShopLanding";
import { Fragment } from "react";

export default function Home() {
  return (
    <>
      <div>
        <head></head>
        <main>
          <div className={styles.container}>
            <div className={styles.cta}>
              <div className={styles.cta__container}>
                <h2 className={[styles.cta__text]}>
                  Some sort of slogan that is kind of cool
                </h2>
                <button className={styles.cta__btn}>Click me!</button>
              </div>
            </div>
            <ShopLanding />

            <div className={styles.who}>
              <div className={styles.who__content}>
                <Image
                  src="https://fakeimg.pl/300x300"
                  height="300"
                  width="300"
                  className={styles.who__content_img}
                />
                <div className={styles.who__content_container}>
                  <p className={styles.who__content_text}>
                    lorem ipsum dolor lorem ep lorem ipsum Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Sunt excepturi eveniet
                    libero facilis, repudiandae nemo debitis voluptate ad, est,
                    quidem adipisci. Libero laborum praesentium amet
                    voluptatibus natus neque accusamus necessitatibus. Adipisci
                    eligendi nemo hic dicta dignissimos magni quisquam vel porro
                    expedita reiciendis aliquam nobis recusandae minus ea
                    numquam, quis eaque veritatis. Atque, consequuntur adipisci?
                    Distinctio minus exercitationem totam fugiat cumque.
                  </p>
                  <button className={styles.who__content_btn}>Click me!</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
