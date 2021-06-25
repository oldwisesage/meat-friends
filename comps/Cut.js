import Image from 'next/image';
import Link from 'next/link';
import styles from './Cut.module.scss';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

// still just a string
const ALL_CUTS_QUERY = gql`
  query ALL_CUTS_QUERY {
  allCuts {
    id
    name
    price 
    description
    photo {
      id
      image {
        publicUrlTransformed
      }
    }
  }
}
`;


const Cut = () => (
  const {data, error, loading} = useQuery(ALL_CUTS_QUERY);
  console.log(data, error, loading);
  return (
  <Link href="/meats/beef/cut">
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src="https://fakeimg.pl/250x250"
          width="250"
          height="250"
          className={styles.content_img}
        />
        <div className={styles.content_container}>
          <div className={styles.content_title}>Bone in Ribeye</div>
          <p className={styles.content_price}>$45</p>
        </div>
      </div>
    </div>
  </Link>

  );
);

export default Cut;
