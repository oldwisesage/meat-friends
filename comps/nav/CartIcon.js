import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useCart } from '../../lib/cartState';
import {
  border,
  borderRadius,
  boxShadow,
  color,
  fontSize,
} from '../../theme/Variables';
import CartCount from '../cart/CartCount';

const CartIconButton = styled.button`
  font-size: ${fontSize.h4};
  border-radius: ${borderRadius.default};
  background: ${color.black};
  color: ${color.white};
  border: ${border.fig};
  display: grid;
  place-items: center;
  padding: 0.4rem 2.5rem;
  position: relative;
  cursor: pointer;
  &:hover {
    box-shadow: ${boxShadow.idle};
  }
  &:active {
    box-shadow: ${boxShadow.active};
  }
`;

const CartIcon = ({ user }) => {
  const { openCart } = useCart();
  console.log(user);
  return (
    <CartIconButton type="button" onClick={openCart}>
      Cart
      <CartCount
        count={user?.cart.reduce(
          (tally, cartItem) => tally + (cartItem.cut ? cartItem.quantity : 0),
          0
        )}
      />
    </CartIconButton>
  );
};

CartIcon.propTypes = {
  user: PropTypes.object,
};

export default CartIcon;
