import Image from "next/image";
import styles from "../styles/About.module.scss";

const Philosophy = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.section__img}>
          <Image src="https://fakeimg.pl/300x300" width="300" height="300" />
        </div>
        <p className={styles.section__text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident ea
          tenetur facilis sint delectus? Id molestiae error sapiente. Nam nihil
          laborum esse vel numquam ut rem consequuntur deleniti. Voluptatibus,
          voluptate.
        </p>
      </div>
      <div className={styles.section}>
        <p className={styles.section__text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident ea
          tenetur facilis sint delectus? Id molestiae error sapiente. Nam nihil
          laborum esse vel numquam ut rem consequuntur deleniti. Voluptatibus,
          voluptate.
        </p>
        <div className={styles.section__img}>
          <Image src="https://fakeimg.pl/200x200" width="200" height="200" />
        </div>
        <p className={styles.section__text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident ea
          tenetur facilis sint delectus? Id molestiae error sapiente. Nam nihil
          laborum esse vel numquam ut rem consequuntur deleniti. Voluptatibus,
          voluptate.
        </p>
      </div>
      <div className={styles.section}>
        <div className={styles.section__img}>
          <Image src="https://fakeimg.pl/300x300" width="300" height="300" />
        </div>
        <p className={styles.section__text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident ea
          tenetur facilis sint delectus? Id molestiae error sapiente. Nam nihil
          laborum esse vel numquam ut rem consequuntur deleniti. Voluptatibus,
          voluptate. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Veritatis magni labore consequatur blanditiis! Voluptatibus omnis
          praesentium esse soluta corporis! Ut, quisquam quam voluptas sunt odit
          magni maxime iste voluptatem laborum!
        </p>
      </div>
    </div>
  );
};

export default Philosophy;
