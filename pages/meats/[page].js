import { useRouter } from 'next/router';
import Cuts from '../../comps/shop/Cuts';
import Heading from '../../comps/Heading';
import Pagination from '../../comps/shop/Pagination';
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
