import Image from "next/image";
import Link from "next/link";
import Cut from "../../../comps/Cut";
import WhatPart from "../../../comps/WhatPart";
import styles from "../../../styles/CutPage.module.scss";

const CutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image
          src="https://fakeimg.pl/500x500"
          width="500"
          height="500"
          className={styles.img_el}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.content_title}>
          <h1 className={styles.content_title_text}>Bone-In Ribeye</h1>
        </div>
        <div className={styles.content_size}>
          <p className={styles.content_size_text}>
            Approximately 3 lbs. or 48 oz
          </p>
        </div>
        <div className={styles.content_rating}>
          <p className={styles.content_rating_text}>★★★★★</p>
        </div>
        <div className={styles.content_price}>
          <p className={styles.content_price_text}>$48</p>
        </div>
        <div className={styles.content_desc}>
          <p className={styles.content_desc_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            labore dignissimos est. In rem vero incidunt laudantium quisquam?
            Architecto velit rerum sint magni enim esse possimus mollitia libero
            ex corrupti!
          </p>
        </div>
        <div className={styles.content_marketing}>
          <p className={styles.content_marketing_text}>Hormone Free</p>
          <p className={styles.content_marketing_text}>No Antibiotics</p>
          <p className={styles.content_marketing_text}>Pasture-raised</p>
        </div>
        <div className={styles.content_addtocart}>
          <div className={styles.content_addtocart_btn}>
            <button className={styles.content_addtocart_btn_qty}>1</button>
            <button className={styles.content_addtocart_btn_click}>
              Add to cart
            </button>
          </div>
        </div>
        <div className={styles.content_freeshipping}>
          <p className={styles.content_freeshipping_text}>
            Free shipping on orders over $100
          </p>
        </div>
      </div>
      <WhatPart />
      <div className={styles.othercuts}>
        <div className={styles.othercuts_title}>
          <h1 className={styles.othercuts_title_text}>Other Cuts</h1>
        </div>
        <Cut />
        <Cut />
        <Cut />
      </div>
    </div>
  );
};

export default CutPage;
