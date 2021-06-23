import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from "constants";
import Image from "next/image";
import styles from "./about.module.scss";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <div className={styles.heading_title}>Learn about meat friends</div>
        <div className={styles.heading_subtitle}>Something clever or funny</div>
      </div>
      <div className={styles.container_cards}>
        <div className={styles.card_what}>
          {/* What is meat friends */}
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
        {/* Something about the team */}
        {/* <div className={styles.who_heading}>
          <h1 className={styles.who_heading_title}>
            People who really care about meat
          </h1>
          <h3 className={styles.who_heading_subtitle}>
            Carnivores, neighbor, farmer,
          </h3>
        </div>
        <div className={styles.who_people}>
          <div className={styles.who_person}>
            <svg
              height="100px"
              width="100px"
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Слой 1"
              viewBox="0 0 251.04086 280.37295"
              x="0px"
              y="0px"
              className={styles.who_person_avatar}
            >
              <title>15</title>
              <path
                d="M351.55448,282.92512h-107.809a4.61882,4.61882,0,0,0-4.56624,5.32265c3.15849,20.52086,9.62127,31.54113,19.75836,33.68892a16.10064,16.10064,0,0,0,3.342.34413c13.96939,0,28.48809-17.23446,35.37038-26.62847,6.88153,9.394,21.39986,26.62847,35.37039,26.62847a16.19373,16.19373,0,0,0,3.342-.34413c10.1371-2.14779,16.59988-13.16806,19.75837-33.68892a4.61883,4.61883,0,0,0-4.56624-5.32265Z"
                transform="translate(-172.12956 -144.31352)"
              ></path>
              <path
                d="M413.92983,247.50182H373.11612v-73.9259a29.29539,29.29539,0,0,0-29.26239-29.2624H248.3658a29.29564,29.29564,0,0,0-29.26239,29.2624v73.9259H181.37016a9.24079,9.24079,0,0,0,0,18.48157h41.0779a206.88977,206.88977,0,0,0-1.80442,33.88307c0,39.637,14.91461,70.23256,39.43222,85.25528,5.86969,21.645,37.72336,39.38045,38.99978,39.55861a.03715.03715,0,0,0,.02017.00609.02658.02658,0,0,0,.016-.00457c1.42869-.153,35.32318-19.1154,39.49123-41.76806,22.49164-15.69006,36.04038-45.23986,36.05332-82.99786a191.57229,191.57229,0,0,0-2.01075-33.93256h41.28423a9.24079,9.24079,0,0,0,0-18.48157ZM310.63723,359.93147H287.53536a4.62049,4.62049,0,0,1,0-9.241h23.10187a4.62049,4.62049,0,0,1,0,9.241Zm54.78005-60.16589-.00153.10088c0,27.3925-8.5489,54.92318-26.88543,71.27752-2.76106-22.05538-17.96842-38.93506-39.44441-38.93506-22.18709,0-37.718,18.00078-39.70935,41.12777-20.13677-16.00868-29.49271-44.84281-29.49385-73.56654a194.165,194.165,0,0,1,1.892-33.78676H363.37646A181.36862,181.36862,0,0,1,365.41728,299.76558Z"
                transform="translate(-172.12956 -144.31352)"
              ></path>
            </svg>
            <div className={styles.who_person_text}>
              <h4 className={styles.who_person_name}>Name of person</h4>
              <p className={styles.who_person_job}>Cool job title</p>
            </div>
          </div>
          <div className={styles.who_person}>
            <h4 className={styles.who_person_name}>Name of person</h4>
            <p className={styles.who_person_title}>Cool job title</p>
          </div>
          <div className={styles.who_person}>
            <h4 className={styles.who_person_name}>Name of person</h4>
            <p className={styles.who_person_title}>Cool job title</p>
          </div>
          <div className={styles.who_person}>
            <h4 className={styles.who_person_name}>Name of person</h4>
            <p className={styles.who_person_title}>Cool job title</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

About.layout = "default";

export default About;
