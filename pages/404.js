import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './err.module.scss';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.background_illustration} />
      </div>
      <div className={styles.container_error}>
        <h1 className={styles.error_title}>Uh Oh!</h1>
        <h3 className={styles.error_subtitle}>Looks like you might be lost</h3>
        <p className={styles.error_content}>
          Go back to the{' '}
          <Link href="/">
            <a className={styles.error_content_btn}>Homepage</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

NotFound.layout = 'err';

export default NotFound;
