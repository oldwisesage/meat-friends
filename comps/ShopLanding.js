// import Image from "next/image";
// import Link from "next/link";
import Animal from './Animal';
import styles from './ShopLanding.module.scss';

// TODO ensure that this becomes a way cooler page

// TODO add functionality into this page
const ShopLanding = () => (
  <div className={styles.container}>
    <div className={styles.animals}>
      <div className={styles.animals_heading}>
        <h1 className={styles.animals_heading_title}>Our current inventory</h1>
        <p className={styles.animals_heading_subtitle}>Choose your favorite</p>
      </div>
      <div className={styles.animals_content}>
        <Animal />
        <Animal />
        <Animal />
        <Animal />
      </div>
    </div>
  </div>
);

export default ShopLanding;
