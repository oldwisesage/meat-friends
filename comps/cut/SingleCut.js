import { useQuery, gql } from '@apollo/client';
import formatMoney from '../../lib/formatMoney';
import DisplayError from '../error/ErrorMessage';
import OtherCuts from './OtherCuts';
import styles from './SingleCut.module.scss';
import Why from './Why';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Cut(where: { id: $id }) {
      id
      name
      price
      description
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

// DAVE ask about nuxt and whether it has a similar function that passes query as a prop when rendering a dynamic route

export default function SingleCut({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: { id },
  });
  if (loading) return <p>Loading.... </p>;
  if (error) return <DisplayError error={error} />;

  const { Cut } = data;

  console.log({ data, loading, error });
  return (
    <div className={styles.grid}>
      <div className={styles.container}>
        <img
          src={Cut.photo.image.publicUrlTransformed}
          alt={Cut.photo.image.altText}
          className={styles.img}
        />

        <div className={styles.product}>
          <div className={styles.product_top}>
            <h1 className={styles.product_top_title}>{Cut.name}</h1>
            <h3 className={styles.product_top_price}>
              {formatMoney(Cut.price)}
            </h3>
          </div>

          {/* TODO add size into database */}
          <p className={styles.product_size}># oz. or # lbs.</p>
          {/* TODO add some sort of rating system into database */}
          <div className={styles.product_rating}>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</div>
          <div className={styles.product_desc}>{Cut.description}</div>
          <div className={styles.product_addtocart}>
            <div className={styles.product_addtocart_qty}>1</div>
            <div className={styles.product_addtocart_btn}>add to cart</div>
          </div>
        </div>
      </div>
      <Why />
      {/* <OtherCuts cut={Cut} /> */}
    </div>
  );
}
