import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import Heading from '../../comps/Heading';
import OrderSummary from '../../comps/account/OrderSummary';
import ErrorMessage from '../../comps/error/ErrorMessage';

const ORDER_ITEMS_QUERY = gql`
  query ORDER_ITEMS_QUERY($id: ID!) {
    Order(where: { id: $id }) {
      id
      total
      charge
      user {
        id
      }
      items {
        name
        description
        price
        quantity
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

const OrderContainer = styled.div`
  display: grid;
  place-items: center;
  min-height: 80vh;
`;

export default function OrderPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, loading } = useQuery(ORDER_ITEMS_QUERY, {
    variables: { id },
  });
  if (loading) return <p>Loading.....</p>;
  if (error) return <ErrorMessage error={error} />;
  console.log(data.Order);

  return (
    <OrderContainer>
      <Heading title="Order Summary" />
      <OrderSummary key={id} orderData={data.Order} />
    </OrderContainer>
  );
}
