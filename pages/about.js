import Image from 'next/image';
import styles from './about.module.scss';

const About = () => (
  <div className={styles.container}>
    <div className={styles.heading}>
      <div className={styles.heading_title}>Learn about meat friends</div>
      <div className={styles.heading_subtitle}>Something clever or funny</div>
    </div>
    <div className={styles.container_cards}>
      <div className={styles.card_what}>
        <div className={styles.card_what_title}>What is meat friends?</div>
        <div className={styles.card_what_text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
          voluptatem, culpa laborum voluptas dolorem.
        </div>
        <div className={styles.card_what_text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
        <div className={styles.card_what_illustration}>
          <svg viewBox="40 10 150 150" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#adadad"
              d="M59.5,-44.8C73.8,-29.5,79.8,-5,74.6,16.6C69.3,38.2,52.8,56.8,36.7,57.3C20.6,57.8,4.9,40.2,-5.9,28.7C-16.6,17.2,-22.4,11.8,-28.1,2.1C-33.8,-7.6,-39.3,-21.7,-34.6,-34.8C-29.9,-47.9,-15,-60,3.8,-63C22.6,-66,45.2,-60.1,59.5,-44.8Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
      <div className={styles.card_why}>
        <div className={styles.card_why_image}>
          <Image
            src="/../public/placeholder.png"
            width="400"
            height="400"
            className={styles.card_why_image}
          />
        </div>
        <div className={styles.card_why_title}>Why is meat friends?</div>
        <div className={styles.card_why_text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
          voluptatem, culpa laborum voluptas dolorem.
          <div patchEvent className={styles.card_why_list}>
            <div className={styles.card_why_list_item}>
              <span>◆</span>
              <p>Great stuff</p>
            </div>
            <div className={styles.card_why_list_item}>
              <span>◆</span>
              <p>Made well</p>
            </div>
            <div className={styles.card_why_list_item}>
              <span>◆</span>
              <p>Super interesting</p>
            </div>
          </div>
        </div>
        {/* Why we started */}
      </div>
      <div className={styles.how}>{/* How meat friends works */}</div>
    </div>
    <div className={styles.who}>
    </div>
  </div>
);

About.layout = 'default';

export default About;
