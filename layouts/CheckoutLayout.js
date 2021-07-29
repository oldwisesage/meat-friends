import styled from 'styled-components';

const CheckoutBackground = styled.div`
  background-image: url('https://images.unsplash.com/photo-1515524042669-de726ea3283d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1998&q=80');
`;

const CheckoutLayout = ({ children }) => (
  <CheckoutBackground>{children}</CheckoutBackground>
);

export default CheckoutLayout;
