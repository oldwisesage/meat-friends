import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

// TODO redo how I do all of this checkout structure

export default function Checkout() {
  return (
    <Elements stripe={stripeLib}>
      <CheckoutForm />
    </Elements>
  );
}
