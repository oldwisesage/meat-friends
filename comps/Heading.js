import styles from './Heading.module.scss';

const Heading = ({ title, subtitle, subtext }) => (
  <div className={styles.heading}>
    <h1 className={styles.heading_title}>{title}</h1>
    <h3 className={styles.heading_subtitle}>{subtitle}</h3>
    <p className={styles.heading_subtext}>{subtext}</p>
  </div>
);

export default Heading;
