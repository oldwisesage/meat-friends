import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import styled from 'styled-components';
import CheckoutForm from '../forms/CheckoutForm';
import CheckoutCart from './CheckoutCart';

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

const CheckoutSection = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 3fr 2fr;
`;

const Checkout = () => (
  <CheckoutSection>
    <Elements stripe={stripeLib}>
      <CheckoutForm />
    </Elements>
    <CheckoutCart />
  </CheckoutSection>
);
export default Checkout;
