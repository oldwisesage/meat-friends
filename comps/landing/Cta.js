import styles from './Cta.module.scss';

// TODO implement some sort of dynamic functionality

const Cta = () => (
  <div className={styles.cta}>
    <div className={styles.cta_container}>
      <h1 className={styles.cta_header}>Try this out</h1>
      <h2 className={styles.cta_subtitle}>Some sort of heading</h2>
      <p className={styles.cta_text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </p>
      <div className={styles.cta_click}>
        <button className={styles.cta_click_btn}>Click me!</button>
      </div>
    </div>
  </div>
);

export default Cta;
