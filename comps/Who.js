import styles from "./Who.module.scss";

const Who = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1 className={styles.heading_title}>Meet the team</h1>
        <h3 className={styles.heading_subtitle}>
          A collection of random people
        </h3>
      </div>
      <div className={styles.content}>
        <div className={styles.content_title}></div>
        <div className={styles.content_text}></div>
        <div className={styles.content_btn}></div>
        <div className={styles.content_illustration}></div>
      </div>
    </div>
  );
};

export default Who;
