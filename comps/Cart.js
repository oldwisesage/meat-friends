import styled from 'styled-components';
import CartStyles from './CartStyles';
import useUser from './User';
import Heading from './Heading';
import CartItem from './CartItem';
import calcTotalPrice from '../lib/calcTotalPrice';
import formatMoney from '../lib/formatMoney';
import { useCart } from '../lib/cartState';
import CloseCartBtn from './CloseCartBtn';

const Container = styled.div`
  display: grid;
  align-content: flex-start;
  margin: 2rem;
`;

const CartFooter = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(2, 1fr);
  grid-auto-flow: column;
  margin-top: 2.5rem;
  align-items: baseline;
  h3 {
    grid-column: 2;
    font-size: 2.5rem;
    text-decoration: uppercase;
  }
  p {
    grid-column: 3;
    font-size: 2.5rem;
    align-self: flex-start;
  }
`;

export default function Cart() {
  const me = useUser();
  const { cartOpen, closeCart, toggleCart } = useCart();

  if (!me) return null;

  return (
    <CartStyles open={cartOpen}>
      <Container>
        <Heading
          title="Shopping Cart"
          subtitle={`${me.name}, your current cart:`}
        />
        <CloseCartBtn />
        {/* FIXME fix this shit -- hangin too far off the screen */}
        {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
        {/* COMP <CartFooter /> */}
        <footer>
          <h3>Total</h3>
          <p>{formatMoney(calcTotalPrice(me.cart))}</p>
        </footer>
      </Container>
    </CartStyles>
  );
}
