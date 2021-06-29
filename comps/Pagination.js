import Link from 'next/link';
import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import DisplayError from './ErrorMessage';
import { perPage } from '../config';
import styles from './Pagination.module.scss';

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _allCutsMeta {
      count
    }
  }
`;

export default function Pagination({ page }) {
  const { error, loading, data } = useQuery(PAGINATION_QUERY);

  if (loading) return <p>Loading.....</p>;
  if (error) return <DisplayError error={error} />;

  const { count } = data._allCutsMeta;
  const pageCount = Math.ceil(count / perPage);
  console.log(page <= 1);
  console.log(page >= pageCount);

  return (
    <>
      <Head>
        <title>
          Meat | Cut {page} of {pageCount}
        </title>
      </Head>
      <div className={styles.container}>
        {page > 1 && (
          <Link href={`/meats/${page - 1}`}>
            <a className={`${styles.link_prev} ${styles.link}`}>⬅️ Prev</a>
          </Link>
        )}
        <p className={`${styles.text_page} ${styles.text}`}>
          Page {page} of {pageCount}
        </p>
        <p className={`${styles.text_page} ${styles.text}`}>
          {count} items total
        </p>
        {page <= pageCount - 1 && (
          <Link href={`/meats/${page + 1}`}>
            <a className={`${styles.link_prev} ${styles.link}`}>Next ➡️</a>
          </Link>
        )}
      </div>
    </>
  );
}
