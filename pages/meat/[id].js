import { useRouter } from 'next/router';
import SingleCut from '../../comps/SingleCut';
import styles from './id.module.scss';

export default function SingleCutPage() {
  const { query } = useRouter();
  return (
    <div className={styles.container}>
      <SingleCut id={query.id} />
    </div>
  );
}
