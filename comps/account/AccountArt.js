import styles from './AccountArt.module.scss';

export default function AccountArt() {
  return (
    <div className={styles.container}>
      <svg viewBox="0 20 300 300" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#ADADAD"
          d="M37.9,-69.4C45.7,-61.2,46.2,-44.1,54.2,-31C62.2,-18,77.7,-9,81.8,2.4C85.9,13.7,78.7,27.5,69.4,38.3C60.1,49,48.7,56.8,36.8,66.6C24.9,76.4,12.4,88.1,-0.2,88.5C-12.9,88.9,-25.8,78,-37.8,68.3C-49.7,58.5,-60.7,50,-63.9,38.8C-67.2,27.6,-62.7,13.8,-64.4,-1C-66.1,-15.8,-74,-31.5,-70.9,-43.1C-67.9,-54.6,-54,-61.9,-40.3,-66.8C-26.7,-71.6,-13.3,-74,0.9,-75.5C15.1,-77,30.1,-77.6,37.9,-69.4Z"
          transform="translate(100 100)"
          className={styles.art}
        />
      </svg>
      <h2 className={styles.art_text}>
        Select something from the side to change your information or alter the
        appearance of your experience!
      </h2>
    </div>
  );
}
