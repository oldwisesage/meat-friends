import styled from 'styled-components';
import {
  borderRadius,
  boxShadow,
  color,
  fontSize,
  fontWeight,
} from '../../theme/Variables';
import CartFooter from '../cart/CartFooter';
import OrderSummaryItem from './OrderSummaryItem';

const OrderContainer = styled.div`
  box-shadow: ${boxShadow.idle};
  border: 0.5px solid ${color.greyPale};
  border-radius: ${borderRadius.default};
  min-height: 50vh;
  min-width: 50vw;
  padding: 2.5rem;
  margin-bottom: 5rem;
`;
const OrderInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 1rem;
  border-bottom: 0.5px solid ${color.greyPale};
`;
const OrderInfoItem = styled.div`
  h3 {
    font-size: ${fontSize.caption};
    font-weight: ${fontWeight.heavy};
  }
  p {
    font-size: ${fontSize.caption};
    font-weight: ${fontWeight.light};
  }
`;

const OrderStatus = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  p {
    font-weight: ${fontWeight.bold};
    border-radius: 50px;
    color: ${color.greenDark};
    background-color: ${color.greenPale};
    padding: 0 1rem;
    font-size: ${fontSize.caption};
    font-weight: ${fontWeight.bold};
  }
`;

const OrderFooter = styled(CartFooter)``;

const OrderSummary = ({ orderData }) => {
  const order = orderData;
  const orderItems = order.items;
  return (
    <OrderContainer>
      <OrderInfo>
        {/* COMP OrderInfoItem  */}
        <OrderInfoItem>
          <h3>Order #</h3>
          <p>12jdklsaf98439f0d</p>
        </OrderInfoItem>
        <OrderInfoItem>
          <h3>Order Status</h3>
          <OrderStatus>
            <p>Complete</p>
          </OrderStatus>
        </OrderInfoItem>
        <OrderInfoItem>
          <h3>Order date</h3>
          <p>11/1/1991</p>
        </OrderInfoItem>
        <OrderInfoItem>
          <h3>Payment Method</h3>
          <p>VISA 8422</p>
        </OrderInfoItem>
        <OrderInfoItem>
          <h3>Shipping address</h3>
          <p>Address title here</p>
        </OrderInfoItem>
        <OrderInfoItem>
          <h3>Billing address</h3>
          <p>Address title here</p>
        </OrderInfoItem>
      </OrderInfo>
      {orderItems.map((orderItem, index) => (
        <OrderSummaryItem key={index} item={orderItem} />
      ))}
      <OrderFooter orderSubtotal={order.total} />
    </OrderContainer>
  );
};
export default OrderSummary;
