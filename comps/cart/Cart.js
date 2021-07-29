import styled from 'styled-components';
import useUser from '../user/useUser';
import Heading from '../Heading';
import CartItem from './CartItem';
import calcTotalPrice from '../../lib/calcTotalPrice';
import formatMoney from '../../lib/formatMoney';
import { useCart } from '../../lib/cartState';
import CloseCartButton from './CloseCartButton';
import CheckoutButton from '../checkout/CheckoutButton';
import CartFooter from './CartFooter';
import { CartItemContainer } from '../checkout/CheckoutCart';
import OtherPayButtons from '../forms/OtherPayButtons';

const CartDrawer = styled.div`
  position: relative;
  background: white;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  min-width: 50rem;
  width: 40%;
  bottom: 0;
  padding: 2.5rem;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
  z-index: 5;
  display: grid;
  grid-template-rows: repeat(3, auto) 1fr;
  ${(props) => props.open && `transform: translateX(0);`};
  border-left: 3px solid #000;
`;

const ContainerTop = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
`;

// TODO fix cart styling

export default function Cart() {
  const me = useUser();
  const { cartOpen } = useCart();

  if (!me) return null;

  return (
    <CartDrawer open={cartOpen}>
      <ContainerTop>
        <Heading
          title="Shopping Cart"
          subtitle={`${me.name}, your current cart:`}
        />
        <CloseCartButton />
      </ContainerTop>
      <CartItemContainer>
        {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </CartItemContainer>
      <CartFooter orderSubtotal={calcTotalPrice(me.cart)}>
        <CheckoutButton />
        <OtherPayButtons />
      </CartFooter>
    </CartDrawer>
  );
}
