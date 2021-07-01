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
const ContainerTop = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
`;

export default function Cart() {
  const me = useUser();
  const { cartOpen } = useCart();

  if (!me) return null;

  return (
    <CartStyles open={cartOpen}>
      <Container>
        <ContainerTop>
          <Heading
            title="Shopping Cart"
            subtitle={`${me.name}, your current cart:`}
          />
          <CloseCartBtn />
        </ContainerTop>
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
