import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import OrderHistoryItem from './OrderHistoryItem';
import Heading from '../Heading';
import {
  borderRadius,
  boxShadow,
  color,
  fontSize,
} from '../../theme/Variables';

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

const OrderContainer = styled.div``;

const OrderBody = styled.div`
  border: 1px solid ${color.greyPale};
  border-radius: ${borderRadius.default};
  min-height: 25rem;
  box-shadow: ${boxShadow.idle};
`;

const OrderHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr) repeat(2, 2fr) 1fr;
  padding: 1rem;
  border-bottom: 1px solid ${color.greyPale};
  min-width: 15rem;
  p {
    display: flex;
    align-items: baseline;
    justify-content: center;
    color: ${color.greyDark};
    text-transform: uppercase;
    font-size: ${fontSize.caption};
  }
`;

const OrderHistory = ({ id, active }) => {
  // TODO add error handling
  const { data, loading } = useQuery(ALL_ORDERS_QUERY, {
    variables: { id },
  });
  if (!active) return null;
  if (loading) return <p>Loading... </p>;
  const { orders } = data.User;

  return (
    <OrderContainer>
      <Heading title="Order History" />
      <OrderBody>
        <OrderHeader>
          <p>Order</p>
          <p>Date</p>
          <p>Status</p>
          <p>Total</p>
        </OrderHeader>
        {orders.map((orderItem) => (
          <OrderHistoryItem key={orderItem.id} order={orderItem} />
        ))}
      </OrderBody>
    </OrderContainer>
  );
};

OrderHistory.propTypes = {
  id: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default OrderHistory;
