import { gql, useQuery } from '@apollo/client';
import Cut from '../shop/Cut';
import Heading from '../Heading';
import styles from './OtherCuts.module.scss';

const OTHER_CUTS_QUERY = gql`
  query {
    allCuts(first: 4) {
      id
      name
      price
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function OtherCuts() {
  const { data, error, loading } = useQuery(OTHER_CUTS_QUERY);
  // TODO add loading situation here
  if (loading) return <p>Loading....</p>;
  const cuts = data.allCuts;
  console.log(data);
  return (
    <div className={styles.container}>
      <Heading
        title="Other Cuts"
        subtitle="Similar cuts you are currently looking at"
      />
      <div className={styles.card_container}>
        {cuts.map((cut) => (
          <Cut key={cut.id} cut={cut} />
        ))}
      </div>
    </div>
  );
}
