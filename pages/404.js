import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './err.module.scss';
import Logo from '../comps/Logo';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, []);
  return (
    <div className={styles.error}>
      <div className={styles.error_container}>
        <h1 className={styles.error_title}>Uh Oh!</h1>
        <h3 className={styles.error_subtitle}>Looks like you might be lost</h3>
        <p className={styles.error_content}>
          You will be return to the homepage in 2 seconds
        </p>
        <Link href="/">
          <div className={styles.logo}>
            <h1 className={styles.logo_text}>meat friends</h1>
          </div>
        </Link>
      </div>
      <div className={styles.error_illustration}>
        <svg viewBox="0 25 300 300" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#ADADAD"
            d="M48.7,-36C60.3,-24.2,65.1,-4.1,62.7,17.5C60.3,39.1,50.7,62.2,35,67.9C19.3,73.6,-2.4,61.9,-22.9,50.8C-43.4,39.7,-62.7,29.2,-67.2,14C-71.6,-1.1,-61.3,-20.9,-47.7,-33.2C-34,-45.4,-17,-50.1,0.7,-50.7C18.5,-51.3,37,-47.8,48.7,-36Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  );
};

NotFound.layout = 'err';

export default NotFound;
