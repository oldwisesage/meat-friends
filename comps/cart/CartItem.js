import Image from 'next/image';
import styled from 'styled-components';
import formatMoney from '../../lib/formatMoney';
import { fontSize } from '../../theme/Variables';
import CartItemInfo from '../forms/CartItemInfo';
import RemoveFromCartButton from './RemoveFromCartButton';

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;
const CartImage = styled(Image)`
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

export default function CartItem({ cartItem }) {
  const { cut } = cartItem;

  return (
    <CartItemContainer>
      <CartImage
        src={cut.photo.image.publicUrlTransformed}
        width="70"
        height="70"
      />
      <InfoContainer>
        <CartItemInfo cut={cut} quantity={cartItem.quantity} />
        <Total>{formatMoney(cut.price * cartItem.quantity)}</Total>
        <RemoveFromCartButton id={cartItem.id} />
      </InfoContainer>
    </CartItemContainer>
  );
}
