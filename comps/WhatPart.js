import styles from "../styles/comps/WhatPart.module.scss";
import Image from "next/image";

const WhatPart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.meatmap}>
        <Image src="https://fakeimg.pl/500x500" width="500" height="500" />
      </div>
      <div className={styles.content}>
        <div className={styles.content_goodfor}>
          <h1 className={styles.content_goodfor_title}>
            What are the best cooking methods?
          </h1>
          <div className={styles.content_goodfor_items}>
            <div className={styles.content_goodfor_item}>
              <div className={styles.content_goodfor_item_img}></div>
              <div className={styles.content_goodfor_item_title}>Grill</div>
            </div>
            <div className={styles.content_goodfor_item}>
              <div className={styles.content_goodfor_item_img}></div>
              <div className={styles.content_goodfor_item_title}>Open Fire</div>
            </div>
            <div className={styles.content_goodfor_item}>
              <div className={styles.content_goodfor_item_img}></div>
              <div className={styles.content_goodfor_item_title}>Barbeque</div>
            </div>
          </div>
        </div>
        <div className={styles.content_cooknotes}>
          <h1 className={styles.content_cooknotes_title}>
            What are the best cooking methods?
          </h1>
          <p className={styles.content_cooknotes_text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            temporibus, sed a soluta vero odit possimus laboriosam quisquam.
            Amet nesciunt sint architecto rerum molestias nisi excepturi sequi
            cum ad voluptate. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Similique hic id beatae rerum dolorum sapiente quisquam
            facilis, fuga aliquam commodi ea magnam tempore, amet odit odio
            assumenda debitis accusamus culpa.
          </p>
        </div>
        <div className={styles.content_whyitsgood}>
          <h1 className={styles.content_whyitsgood_title}>
            What makes it so good?
          </h1>
          <div className={styles.content_whyitsgood_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            veniam vitae tempore consequuntur voluptatibus, fugit quis qui dolor
            obcaecati facere quas debitis vero eveniet? Saepe molestiae
            consectetur blanditiis sed optio! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quibusdam nobis blanditiis suscipit
            illo vero hic velit atque? Quidem magnam hic, sunt nesciunt veniam
            iusto dolorum fugiat cupiditate, ratione, officiis excepturi?
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatPart;
