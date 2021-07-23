import { stubTrue } from 'lodash';
import Image from 'next/image';
import Heading from '../Heading';
import styles from './PersonalInfo.module.scss';

// TODO add crud ability with this personal infomation

export default function PersonalInfo({ active }) {
  if (!active) return null;
  // TODO add formik here
  return (
    <div className={styles.container}>
      <Heading title="Personal Information" />
      <div className={styles.info_container}>
        <div className={styles.avatar}>
          <div className={styles.avatar_img}>
            <div className={styles.avatar_img_edit}>✎ edit</div>
          </div>
          <div className={styles.avatar_user}>
            <div className={styles.avatar_user_name}>Hi User's name!</div>
            <div className={styles.avatar_user_fact}>
              Feel free to edit your info here
            </div>
          </div>
        </div>
        {/* TODO really style this out so it's potentially really fun */}
        <div className={styles.edit_container}>
          <div className={styles.edit_name}>
            <div className={styles.edit_name_first}>first name</div>
            <div className={styles.edit_name_last}>last name</div>
          </div>
          <div className={styles.edit_email}>email</div>
          <div className={styles.edit_birthday}>birthday</div>
          <div className={styles.edit_location}>
            <div className={styles.edit_location_city}>city</div>
            <div className={styles.edit_location_state}>state</div>
          </div>
          <div className={styles.edit_favorite}>
            <div className={styles.edit_favorite_cut}>favorite cut</div>
            <div className={styles.edit_favorite_animal}>Favorite meat</div>
          </div>
        </div>
      </div>
    </div>
  );
}
