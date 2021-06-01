import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Landing.module.scss";
import { Fragment } from "react";

export default function Home() {
  return (
    <>
      <div>
        <head></head>
        <main>
          <div className={styles.container}>
            <div className={styles.cta}>
              <h2 className={[styles.cta__text]}>
                Some sort of slogan that is kind of cool
              </h2>
              <button className={styles.cta__btn}>Click me!</button>
            </div>
            <div className={styles.shop}>
              <h1 className={styles.shop__title}>Section 2 - Shop</h1>.
              <div className={styles.shop__animals}>
                <div className={styles.shop__animal}>
                  <Image
                    src="https://fakeimg.pl/300x300"
                    className={styles.shop__img}
                    width="200"
                    height="200"
                  />
                  <button className={styles.shop__btn}>Shop pork</button>
                </div>
                <div className={styles.shop__animal}>
                  <Image
                    src="https://fakeimg.pl/300x300"
                    className={styles.shop__img}
                    width="200"
                    height="200"
                  />
                  <button className={styles.shop__btn}>Shop beef</button>
                </div>
                <div className={styles.shop__animal}>
                  <Image
                    src="https://fakeimg.pl/300x300"
                    className={styles.shop__img}
                    width="200"
                    height="200"
                  />
                  <button className={styles.shop__btn}>Shop chix</button>
                </div>
              </div>
            </div>
            <div className={styles.who}>
              <h1 className={styles.who__title}>Section 3 - Philosophy</h1>
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
