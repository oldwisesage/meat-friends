import { useRouter } from 'next/router';
import RequestReset from '../comps/RequestReset';
import Reset from '../comps/Reset';
import styles from './reset.module.scss';

export default function ResetPage() {
  ResetPage.layout = 'pic';
  const { query } = useRouter();
  console.log(query.token);

  if (!query?.token) {
    return (
      <div className={styles.container}>
        <p className={styles.notification}>You must supple a token!</p>
        <RequestReset />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Reset token={query.token} />
    </div>
  );
}
ResetPage.layout = 'pic';
