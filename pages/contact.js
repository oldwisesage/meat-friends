import Image from 'next/image';
import ContactForm from '../comps/forms/ContactForm';
import styles from './contact.module.scss';

const ContactUs = () => (
  <div className={styles.container}>
    <div className={styles.heading}>
      <h1 className={styles.heading_title}>Need to reach out?</h1>
      <h3 className={styles.heading_subtitle}>
        Anything you need, we're here to help!
      </h3>
    </div>
    <div className={styles.lower_container}>
      <div className={styles.sidebar}>
        {/* // <Image src="" width="250" height="250" /> */}
        <div className={styles.customer}>
          <div className={styles.customer_title}>Customer Service</div>
          <div className={styles.customer_section}>
            <div className={styles.customer_section_hr}>Hours:</div>
            <div className={styles.customer_section_hr_content}>
              Friday 10am to 6pm EST
            </div>
            <div className={styles.customer_section_phone}>Call:</div>
            <div className={styles.customer_section_phone_content}>
              (301) GET-MEAT
            </div>
            <div className={styles.customer_section_email}>Email:</div>
            <div className={styles.customer_section_email_content}>
              help@meatfriends.co
            </div>
          </div>
        </div>
        <div className={styles.marketing}>
          <div className={styles.marketing_title}>Collab? Want to chat?</div>
          <div className={styles.marketing_text}>
            <span className={styles.marketing_text_bold}>Email us:</span>{' '}
            marketing@meatfriends.co
          </div>
        </div>
        <div className={styles.visit}>
          <div className={styles.visit_title}>Come see us!</div>
          <div className={styles.visit_content}>
            <div className={styles.visit_content_logo}>meat friends</div>
            <div className={styles.visit_content_address}>
              40 E. Patrick St. <br />
              Frederick, MD 21701
            </div>
            <div className={styles.visit_content_email}>
              butcher@meatfriends.co
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        {/* TODO formik */}
        <ContactForm />
      </div>
    </div>
  </div>
);

export default ContactUs;
