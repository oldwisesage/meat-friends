import Heading from '../Heading';
import styles from './Settings.module.scss';

export default function Settings({ active, name }) {
  if (!active) return null;
  return (
    <div className={styles.container}>
      <Heading title="Settings" />
      <div className={styles.container_settings}>
        <h4 className={styles.greeting}>
          Hi {name}, change your experience here!
        </h4>
        <div className={styles.darkmode}>
          <h4 className={styles.darkmode_label}>Dark mode: </h4>
          <div className={styles.darkmode_options}>
            <p className={styles.darkmode_options_light}>Light</p>
            <p className={styles.darkmode_options_dark}>Dark</p>
            <p className={styles.darkmode_options_system}>System</p>
          </div>
        </div>
        <div className={styles.animation}>
          <h4 className={styles.animation_label}>Animation mode: </h4>
          <div className={styles.animation_options}>
            <p className={styles.animation_options_low}>Low</p>
            <p className={styles.animation_options_high}>High</p>
          </div>
        </div>
        <div className={styles.font}>
          <h4 className={styles.font_label}>Font size: </h4>
          <div className={styles.font_options}>
            <p className={styles.font_options_standard}>Standard</p>
            <p className={styles.font_options_large}>Large</p>
            <p className={styles.font_options_massive}>I can't read</p>
          </div>
        </div>
      </div>
    </div>
  );
}
