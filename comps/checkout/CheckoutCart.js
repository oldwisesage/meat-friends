import styled from 'styled-components';
import useUser from '../user/useUser';
import Heading from '../Heading';
import CartItem from '../cart/CartItem';
import CartFooter from '../cart/CartFooter';
import calcTotalPrice from '../../lib/calcTotalPrice';

const CartContainer = styled.div`
  background: white;
  height: 100%;
  min-width: 50rem;
  top: 0;
  bottom: 0;
  right: 0;
  border-left: 3px solid black;
  display: grid;
  padding: 2.5rem;
  align-items: flex-start;
`;
export const CartItemContainer = styled.div`
  margin-top: 2.5rem;
`;

// TODO fix cart styling
const CheckoutCart = () => {
  const me = useUser();
  if (!me) return null;
  console.log(calcTotalPrice(me.cart));
  return (
    <CartContainer>
      <Heading
        title="Shopping Cart"
        subtitle={`${me.name}, your current cart:`}
      />
      <CartItemContainer>
        {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </CartItemContainer>
      <CartFooter me={me} subtotal={calcTotalPrice(me.cart)} />
    </CartContainer>
  );
};
export default CheckoutCart;
