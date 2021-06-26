import Image from 'next/image';
import styles from './Who.module.scss';

// TODO implement far more interesting styling

const Who = () => (
  <div className={styles.container}>
    <div className={styles.heading}>
      <h1 className={styles.heading_title}>What drives us?</h1>
    </div>
    <div className={styles.content}>
      <h2 className={styles.content_title}>
        Something about our cool about the company.
      </h2>
      <p className={styles.content_text}>
        Something far more in depth about the company & how it should be
        presented to all the people out there.
      </p>
      <button className={styles.content_btn}>Click me!</button>
    </div>
  </div>
);

export default Who;
