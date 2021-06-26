import Link from 'next/link';
import styles from './Contact.module.scss';

const Contact = () => (
  <div className={styles.container}>
    <div className={styles.text}>
      <p className={styles.text_subtitle}>
        Ask us anything! If you need assistance with an order please contact
        customer support
      </p>
    </div>
    {/* COMP Form */}
    <div className={styles.form}>
      <div className={styles.form__group}>
        <h2 className={styles.form__group_title}>Email</h2>
        <input
          type="email"
          className={styles.form__input}
          placeholder="Type your email here"
          id="email"
          required
        />
      </div>
      <div className={styles.form__group}>
        <h2 className={styles.form__group_title}>
          What can we help you with today?
        </h2>
        <input
          type="dropdown"
          className={`${styles.form__input} ${styles.form__input_dropdown}`}
          placeholder="Dropdown menu here"
          id="dropdown"
          required
        />
      </div>
      <div className={styles.form__group}>
        <h2 className={styles.form__group_title}>Subject</h2>
        <input
          type="subject"
          className={styles.form__input}
          placeholder="Type your subject line here"
          id="subject"
          required
        />
      </div>
      <div className={styles.form__group}>
        <h2 className={styles.form__group_title}>Description</h2>
        <input
          type="description"
          className={`${styles.form__input} ${styles.form__input_description}`}
          placeholder=""
          id="description"
          required
        />
      </div>
      <div className={styles.submit}>
        <p className={styles.submit_text}>
          A customer service rep will be in touch shortly to assist you!
        </p>
        <button type="submit" className={styles.submit_btn}>Submit</button>
      </div>
    </div>
  </div>
);

export default Contact;
