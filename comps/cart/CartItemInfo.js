import styled from 'styled-components';
import PropTypes from 'prop-types';
import formatMoney from '../../lib/formatMoney';

const CartItemInfoContainer = styled.div`
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

const CartItemInfo = ({ cut, quantity }) => (
  <CartItemInfoContainer>
    <CutName>{cut.name}</CutName>
    <CutPrice>
      {quantity} x {formatMoney(cut.price)}
    </CutPrice>
  </CartItemInfoContainer>
);

CartItemInfo.propTypes = {
  cut: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CartItemInfo;
