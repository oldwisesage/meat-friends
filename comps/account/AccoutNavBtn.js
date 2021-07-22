import { useRouter } from 'next/router';
import styles from './AccountNavBtn.module.scss';


export default function AccountNavBtn({ comp, active, link }) {
  const router = useRouter();

  function handleClick() {
    router.push({ pathname: `/account/${link}` });
  }

  return (
    <button className={styles.btn} type="button" onClick={handleClick}>
      {active ? (
        <p className={`${styles.btn_click} ${styles.btn_click_active}`}>
          {comp}
        </p>
      ) : (
        <p className={styles.btn_click}>{comp}</p>
      )}
    </button>
  );
}
