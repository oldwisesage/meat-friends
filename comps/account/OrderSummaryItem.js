import Image from 'next/image';
import styled from 'styled-components';
import formatMoney from '../../lib/formatMoney';
import { fontSize } from '../../theme/Variables';
import OrderItemInfo from './OrderItemInfo';

const OrderItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;
const OrderImage = styled(Image)`
  border-radius: 5px;
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(2, 1fr);
  width: 100%;
  align-items: center;
  margin-left: 2.5rem;
`;
const Total = styled.p`
  font-size: ${fontSize.h4};
`;

const OrderSummaryItem = ({ item }) => (
  <OrderItemContainer>
    <OrderImage
      src={item.photo.image.publicUrlTransformed}
      width="70"
      height="70"
    />
    <InfoContainer>
      <OrderItemInfo item={item} quantity={item.quantity} />
      <Total>{formatMoney(item.price * item.quantity)}</Total>
    </InfoContainer>
  </OrderItemContainer>
);
export default OrderSummaryItem;
