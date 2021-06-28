import styles from './Heading.module.scss';

const Heading = ({ title, subtitle }) => (
  <div className={styles.heading}>
    <h1 className={styles.heading_title}>{title}</h1>
    <h3 className={styles.heading_subtitle}>{subtitle}</h3>
  </div>
);

export default Heading;
