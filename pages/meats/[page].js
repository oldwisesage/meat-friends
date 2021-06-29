import { useRouter } from 'next/dist/client/router';
import Cuts from '../../comps/Cuts';
import Heading from '../../comps/Heading';
import Pagination from '../../comps/Pagination';
import styles from './meat.module.scss';

export default function MeatPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Heading title="Beef" subtitle="Locally sourced beef" />
        <Pagination page={page || 1} />
      </div>
      <Cuts page={page || 1} />
    </div>
  );
}
