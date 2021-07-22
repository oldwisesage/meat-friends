import styled from 'styled-components';
import calcTotalPrice from '../../lib/calcTotalPrice';
import formatMoney from '../../lib/formatMoney';

const CartFooterContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: column;
  margin-top: 2.5rem;
  border-top: 1px solid dark-grey;
  align-items: baseline;
`;

const SubtotalContainer = styled.div`
  display: grid;
  grid-template-columns: 85px 2fr repeat(2, 1fr);
  grid-gap: 1rem;
  border-top: 1px solid black;
  padding: 2.5rem 0;
`;

const SubtotalLabel = styled.p`
  font-size: 1.958rem;
  font-weight: 500;
  grid-column: 2;
  justify-self: flex-end;
  padding-right: 2.5rem;
`;

const SubtotalNumber = styled.p`
  font-size: 1.958rem;
  grid-column: 3;
`;

const TotalContainer = styled.div`
  display: grid;
  grid-template-columns: 85px 2fr repeat(2, 1fr);
  align-content: center;
  justify-items: center;
  border-top: 0.5px solid $grey-pale;
  padding-top: 2.5rem;
  border-top: 1px solid black;
`;

const TotalLabel = styled.p`
  font-size: 2.5rem;
  font-weight: 500;
  grid-column: 2;
  justify-self: flex-end;
  padding-right: 2.5rem;
`;

const TotalNumber = styled.p`
  font-size: 2.5rem;
  grid-column: 3;
  justify-self: flex-start;
`;

const CartFooter = ({ me }) => {
  const subtotal = calcTotalPrice(me.cart);
  const taxes = subtotal * 0.05;
  const shipping = 10;
  const total = taxes + shipping + subtotal;
  return (
    <CartFooterContainer>
      <SubtotalContainer>
        <SubtotalLabel>Subtotal</SubtotalLabel>
        <SubtotalNumber>{formatMoney(total)}</SubtotalNumber>
        <SubtotalLabel>Taxes</SubtotalLabel>
        <SubtotalNumber>{formatMoney(taxes)}</SubtotalNumber>
        <SubtotalLabel>Shipping</SubtotalLabel>
        <SubtotalNumber>{formatMoney(shipping)}</SubtotalNumber>
      </SubtotalContainer>
      <TotalContainer>
        <TotalLabel>Total</TotalLabel>
        <TotalNumber>{formatMoney(total)}</TotalNumber>
      </TotalContainer>
    </CartFooterContainer>
  );
};

export default CartFooter;
