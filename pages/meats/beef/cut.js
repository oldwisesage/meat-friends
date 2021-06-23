import Image from "next/image";
import Link from "next/link";
import Cut from "../../../comps/Cut";
import WhatPart from "../../../comps/WhatPart";
import styles from "./cut.module.scss";

const CutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        {/* <ProductInfo /> */}
        <div className={styles.container_cut}>
          <div className={styles.img_carousel}>
            <Image
              src="/../../../public/placeholder.png"
              height="500"
              width="500"
              className={styles.img_carousel}
            />
          </div>
          <div className={styles.product}>
            <div className={styles.product_top}>
              <div className={styles.product_top_title}>Cut name</div>
              <div className={styles.product_top_price}>$20</div>
            </div>
            <div className={styles.product_size}># oz. or # lbs.</div>
            <div className={styles.product_rating}>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</div>
            <div className={styles.product_desc}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              maiores perferendis enim velit vitae. Enim unde vitae fugiat,
              culpa quaerat ullam laborum dolorem odio provident.
            </div>
            <div className={styles.product_addtocart}>
              <div className={styles.product_addtocart_qty}>1</div>
              <div className={styles.product_addtocart_btn}>add to cart</div>
            </div>
          </div>
        </div>

        {/* <Why /> */}
        <div className={styles.container_why}>
          <div className={styles.content}>
            <div className={styles.content_qa}>
              <div className={styles.content_title}>Best methods to cook?</div>
              <div className={styles.content_cookstyles}>
                <div className={styles.content_cookstyles_container}>
                  <div className={styles.content_cookstyles_icon}>🍳</div>
                  <div className={styles.content_cookstyles_text}>Grill</div>
                </div>
                <div className={styles.content_cookstyles_container}>
                  <div className={styles.content_cookstyles_icon}>🥘</div>
                  <div className={styles.content_cookstyles_text}>Braise</div>
                </div>
                <div className={styles.content_cookstyles_container}>
                  <div className={styles.content_cookstyles_icon}>🔥</div>
                  <div className={styles.content_cookstyles_text}>
                    Open fire
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content_qa}>
              <div className={styles.content_title}>Why is it so good?</div>
              <div className={styles.content_text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                facere obcaecati non nam dignissimos veritatis ipsa esse illo
                totam nemo commodi possimus.
              </div>
            </div>
            <div className={styles.content_qa}>
              <div className={styles.content_title}>Where is it from?</div>
              <div className={styles.content_text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus placeat, non.
              </div>
            </div>
          </div>
          <div className={styles.art}>
            <div className={styles.art_illustration}></div>
            <svg
              viewBox="40 35 140 140"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.art_blob}
            >
              <path
                fill="#FF0066"
                d="M38.4,-52C52.2,-42.8,67.6,-34.9,77.1,-21.3C86.6,-7.8,90.2,11.3,81.9,23.5C73.6,35.6,53.5,40.8,37.9,51.6C22.2,62.5,11.1,79.2,-1.1,80.7C-13.3,82.2,-26.6,68.5,-35.8,55.6C-45.1,42.6,-50.4,30.3,-54.1,17.8C-57.8,5.3,-59.9,-7.4,-55.8,-17.6C-51.7,-27.7,-41.5,-35.3,-31.1,-45.6C-20.8,-55.9,-10.4,-69,0.9,-70.3C12.3,-71.6,24.6,-61.1,38.4,-52Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>

        {/* <OtherCuts />  */}
        <div className={styles.container_cuts}>
          <div className={styles.heading}>
            <div className={styles.heading_title}>Other Cuts</div>
            <div className={styles.heading_subtitle}>
              Similar cuts to what you are currently looking at
            </div>
          </div>
          <div className={styles.card_container}>
            <Cut />
            <Cut />
            <Cut />
            <Cut />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CutPage;
