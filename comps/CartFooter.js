import styled from 'styled-components';

const CartFooter = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(2, 1fr);
  grid-auto-flow: column;
  margin-top: 2.5rem;
  border-top: 1px solid dark-grey;
  align-items: baseline;
  h3 {
    grid-column: 3;
    font-size: 2.5rem;
    text-transform: uppercase;
  }
  p {
    grid-column: 4;
    font-size: 2.5rem;
  }
`;

export default CartFooter;
