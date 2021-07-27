import styled from 'styled-components';
import formatMoney from '../../lib/formatMoney';

const OrderItemInfoContainer = styled.div`
  display: grid;
  align-items: center;
  align-content: center;
`;

const CutName = styled.p`
  font-weight: 400;
  font-size: 1.953rem;
`;
const CutPrice = styled.p`
  font-size: 1.568rem;
  font-weight: 200;
  justify-self: flex-start;
`;

const OrderItemInfo = ({ item, quantity }) => (
  <OrderItemInfoContainer>
    <CutName>{item.name}</CutName>
    <CutPrice>
      {quantity} x {formatMoney(item.price)}
    </CutPrice>
  </OrderItemInfoContainer>
);

export default OrderItemInfo;
