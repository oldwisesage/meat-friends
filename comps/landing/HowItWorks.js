import Image from 'next/image';
import Heading from '../Heading';
import styles from './HowItWorks.module.scss';

const HowItWorks = () => (
  <div className={styles.container}>
    <div className={styles.inner_container}>
      <Heading
        title="How it works"
        subtitle="A simple way to get the best quality meat"
      />
      <div className={styles.section}>
        <div className={styles.section_img}>
          <Image src="/../public/placeholder.png" width="300" height="300" />
        </div>
        <div className={styles.section_content}>
          <h3 className={styles.section_content_subtitle}>
            Title about this. Something fun.
          </h3>
          <p className={styles.section_content_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae porro
            veritatis suscipit et impedit quaerat odio pariatur.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default HowItWorks;
