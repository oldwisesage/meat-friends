import styled from 'styled-components';
import useUser from '../user/User';
import Heading from '../Heading';
import CartItem from '../cart/CartItem';
import CartFooter from '../cart/CartFooter';

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
  grid-template-rows: repeat(3, auto) 1fr;
`;
const CartItemContainer = styled.div`
  margin-top: 2.5rem;
`;

// TODO fix cart styling
const CheckoutCart = () => {
  const me = useUser();

  if (!me) return null;

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
      <CartFooter me={me} />
    </CartContainer>
  );
};
export default CheckoutCart;
