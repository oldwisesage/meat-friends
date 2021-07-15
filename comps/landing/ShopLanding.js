import { gql, useQuery } from '@apollo/client';
import Cut from '../shop/Cut';
import Heading from '../Heading';
import styles from './ShopLanding.module.scss';
import Animal from '../Animal';

// const OTHER_CUTS_QUERY = gql`
//   query {
//     allCuts(first: 4) {
//       id
//       name
//       price
//       photo {
//         id
//         image {
//           publicUrlTransformed
//         }
//       }
//     }
//   }
// `;

export default function ShopLanding() {
  //   const { data, error, loading } = useQuery(OTHER_CUTS_QUERY);
  // TODO Add query for different animals here
  //   if (loading) return <p>Loading....</p>;
  //   const cuts = data.allCuts;
  //   console.log(data);
  return (
    <div className={styles.container}>
      <Heading title="Favorite variety of meat?" />
      <div className={styles.animal_container}>
        <Animal title="Beef" />
        <Animal title="Pork" />
        <Animal title="Lamb" />
        <Animal title="Chicken" />
      </div>
    </div>
  );
}
