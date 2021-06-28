import { useRouter } from 'next/dist/client/router';
import UpdateCut from '../comps/UpdateCut';
import styles from './add.module.scss';

export default function UpdatePage() {
  const { query } = useRouter();
  return (
    <div className={styles.container}>
      <UpdateCut id={query.id} />
    </div>
  );
}
