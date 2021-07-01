import styled from 'styled-components';

const CartStyles = styled.div`
  position: relative;
  background: white;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  min-width: 30rem;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${(props) => props.open && `transform: translateX(0);`};
  /* div {
    display: grid;
  align-content: flex-start;
  padding: 2rem;
  } */
  footer {
  display: grid;
  grid-template-columns: 2fr repeat(2, 1fr) 5rem;
  margin-top: 2.5rem;
  border-top: 1px solid dark-grey;
  align-items: baseline;
  h3 {
    grid-column: 2;
    font-size: 2.5rem;
    text-transform: uppercase;
  }
  p {
    grid-column: 3;
    font-size: 2.5rem;
  }
`;

export default CartStyles;
