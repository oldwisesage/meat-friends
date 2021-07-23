import Link from 'next/link';
import styles from './EditCut.module.scss';

export default function EditCut({ id }) {
  return (
    <Link
      href={{
        pathname: 'update',
        query: {
          id,
        },
      }}
    >
      <a className={styles.content_edit}>✎ Edit cut</a>
    </Link>
  );
}
