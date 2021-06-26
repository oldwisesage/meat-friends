import styles from './faq.module.scss';

const FaqPage = () => (
  <div className={styles.container}>
    <div className={styles.faq}>
      {/* COMP <Title /> */}
      <div className={styles.faq_heading}>
        <h1 className={styles.faq_heading_title}>Frequently Asked Questions</h1>
        <h3 className={styles.faq_heading_subtitle}>
          Here are the answers to our most commonly asked questions
        </h3>
      </div>
      <div className={styles.faq_item}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.faq_item_icon}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
        <h3 className={styles.faq_item_question}>Where do you deliver?</h3>
      </div>
      <p className={styles.faq_item_answer}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nobis
        ducimus reiciendis incidunt odio ipsum facere, magnam autem nisi
        reprehenderit! Laboriosam voluptatum tempora eius itaque placeat vero
        beatae, ab mollitia.
      </p>
      <div className={styles.faq_item}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.faq_item_icon}
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
        <h3 className={styles.faq_item_question}>
          How will my order be shipped?
        </h3>
      </div>
      <div className={styles.faq_item}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.faq_item_icon}
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
        <h3 className={styles.faq_item_question}>
          What kinds of farms do you work with?
        </h3>
      </div>
      <div className={styles.faq_item}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.faq_item_icon}
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
        <h3 className={styles.faq_item_question}>Is your meat sustainable?</h3>
      </div>
    </div>
  </div>
);

FaqPage.layout = 'pic';

export default FaqPage;
