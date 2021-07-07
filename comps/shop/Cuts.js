import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { perPage } from '../config';
import Cut from './Cut';
import styles from './Cuts.module.scss';

const ALL_CUTS_QUERY = gql`
  query ALL_CUTS_QUERY($skip: Int = 0, $first: Int) {
    allCuts(first: $first, skip: $skip) {
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

export default function Cuts({ page }) {
  const { data, error, loading } = useQuery(ALL_CUTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });
  if (loading) {
    console.log('🕗  loading....');
    return <p>Loading</p>;
  }
  if (error) {
    console.log(`💩  ${error.message}`);
    return <p>{error.message}</p>;
  }
  return (
    <div className={styles.card_container}>
      {data.allCuts.map((cut) => (
        <Cut key={cut.id} cut={cut} />
      ))}
    </div>
  );
}
export { ALL_CUTS_QUERY };
