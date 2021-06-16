import styles from "./Background.module.scss";

const Background = () => {
  return (
    <>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.blob}
      >
        <path
          fill="#8f8f8f"
          d="M59.5,-44.8C73.8,-29.5,79.8,-5,74.6,16.6C69.3,38.2,52.8,56.8,36.7,57.3C20.6,57.8,4.9,40.2,-5.9,28.7C-16.6,17.2,-22.4,11.8,-28.1,2.1C-33.8,-7.6,-39.3,-21.7,-34.6,-34.8C-29.9,-47.9,-15,-60,3.8,-63C22.6,-66,45.2,-60.1,59.5,-44.8Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.blob2}
      >
        <path
          fill="#8f8f8f"
          d="M23.3,-31C34.2,-29.3,49.7,-29.5,54,-23.6C58.3,-17.7,51.4,-5.7,45.4,3.6C39.5,12.8,34.5,19.2,29.1,25.1C23.7,31,18,36.4,9.3,45.1C0.6,53.8,-11.1,65.8,-24.4,68.6C-37.7,71.3,-52.6,64.9,-56.5,53.1C-60.5,41.2,-53.5,23.9,-57.1,7.4C-60.6,-9.1,-74.9,-24.9,-74,-36.7C-73.1,-48.5,-57.2,-56.3,-42.3,-56.2C-27.5,-56.1,-13.7,-48,-3.8,-42.2C6.2,-36.4,12.5,-32.7,23.3,-31Z"
          transform="translate(100 100)"
        />
      </svg>
    </>
  );
};

export default Background;
