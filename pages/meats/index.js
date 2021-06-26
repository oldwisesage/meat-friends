import Link from 'next/link';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Cut from '../../comps/Cut';
import styles from './meat.module.scss';

const ALL_CUTS_QUERY = gql`
  query {
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

const Cuts = () => {
  const { data, error, loading } = useQuery(ALL_CUTS_QUERY);
  if (loading) {
    console.log('🕗  loading....');
    return <p>Loading</p>;
  }
  if (error) {
    console.log(`💩  ${error.message}`);
    return <p>{error.message}</p>;
  }

  return (
    <div className={styles.container}>
      {/* TODO create title component */}
      <div className={styles.title}>
        <h1 className={styles.title_heading}>Beef</h1>
        <h3 className={styles.title_subheading}>Locally sourced beef</h3>
      </div>
      <div className={styles.card_container}>
        {data.allCuts.map((cut) => (
          <Cut key={cut.id} cut={cut} />
        ))}
      </div>
    </div>
  );
};

export default Cuts;
