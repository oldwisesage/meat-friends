import { useRouter } from 'next/router';
import Cuts from '../../comps/Cuts';
import Pagination from '../../comps/Pagination';
import Heading from '../../comps/Heading';
import styles from './meat.module.scss';

export default function Meat() {
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
