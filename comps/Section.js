import styles from './Section.module.scss';
// WHAT is this needed?
const Section = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <h1 className={styles.header_text}>Section title</h1>
    </div>
  </div>
);

export default Section;
