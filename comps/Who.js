import Image from "next/image";
import styles from "./Who.module.scss";

const Who = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1 className={styles.heading_title}>Meet the team</h1>
      </div>
      <div className={styles.content_illustration}>
        <Image src="/../public/placeholder.png" width="300" height="300" />
      </div>
      <div className={styles.content}>
        <h2 className={styles.content_title}>Something about our cool team.</h2>
        <p className={styles.content_text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default Who;
