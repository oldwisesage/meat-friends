import Image from "next/image";
import Contact from "../comps/Contact";
import styles from "../styles/pages/ContactUs.module.scss";

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1 className={styles.heading_title}>Need to reach out?</h1>
      </div>
      <div className={styles.sidebar}>
        {/* <Image src="" width="250" height="250" /> */}
        <div className={styles.customer}>
          <div className={styles.customer_title}>Customer Service</div>
          <div className={styles.customer_text}>
            <span className={styles.customer_text_bold}>Hours:</span> Monday -
            Friday 10am to 6pm EST <br />
            <span className={styles.customer_text_bold}>Call/Text:</span> (301)
            606 1346 <br />
            <span className={styles.customer_text_bold}>Email:</span>{" "}
            help@meatfriends.co
          </div>
        </div>
        <div className={styles.marketing}>
          <div className={styles.marketing_title}>
            Want to do something cool together?
          </div>
          <div className={styles.marketing_text}>
            <span className={styles.customer_text_bold}>Email us:</span>{" "}
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
        <Contact />
      </div>
    </div>
  );
};

export default ContactUs;
