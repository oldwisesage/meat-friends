import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import OrderHistoryItem from './OrderHistoryItem';
import styles from './OrderHistory.module.scss';

const ALL_ORDERS_QUERY = gql`
  query($id: ID!) {
    User(where: { id: $id }) {
      id
      name
      orders {
        id
        label
        itemsCount
        total
      }
    }
  }
`;

export default function OrderHistory({ id }) {
  // TODO add error handling
  const { data, error, loading } = useQuery(ALL_ORDERS_QUERY, {
    variables: { id },
  });
  if (loading) return <p>Loading... </p>;
  const { orders } = data.User;
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.title_text}>Order History</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.body_head}>
          <h4 className={styles.body_head_text}>Order</h4>
          <h4 className={styles.body_head_text}>Date</h4>
          <h4 className={styles.body_head_text}>Status</h4>
          <h4 className={styles.body_head_text}>Total</h4>
        </div>
        {orders.map((orderItem) => (
          <OrderHistoryItem key={orderItem.id} order={orderItem} />
        ))}
      </div>
    </div>
  );
}
