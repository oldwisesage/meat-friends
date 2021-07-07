import { useMutation } from '@apollo/client';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import gql from 'graphql-tag';
import { useRouter } from 'next/dist/client/router';
import nProgress from 'nprogress';
import { useState } from 'react';
import { CartStateProvider } from '../lib/cartState';
import styles from './CheckoutForm.module.scss';
import DisplayError from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';

const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION($token: String!) {
    checkout(token: $token) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`;

// LEARN understand how this functions way better
export default function CheckoutForm() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { closeCart } = CartStateProvider();
  const router = useRouter();
  const [checkout, { error: graphQLError }] = useMutation(
    CREATE_ORDER_MUTATION,
    { refetchQueries: [{ query: CURRENT_USER_QUERY }] }
  );

  async function handleSubmit(e) {
    // Stop form from submitting
    e.preventDefault();
    console.log('✅  Form initialized!');
    // Start page transition
    // TODO Understand this and implement nProgress.start();
    if (!stripe || !elements) {
      console.log('🤬 Form has not intitialized');
      return;
    }
    // Create payment method via stripe token
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    // Handle errors from stripe
    if (error) {
      setError(error);
      console.log(`🤬 Error: ${error}`);
      // TODO add some sort of functionality that shows loading has finished
      return;
    }
    console.log(`💳 Payment Method:`, { paymentMethod });
    // send the token from step 3 to our keystone server via a custom mutation
    const order = await checkout({ variables: { token: paymentMethod.id } });
    console.log(`✅ Order successfully completed!`, order);
    // Change the page to view the order
    router.push({
      pathname: `/order/[id]`,
      query: { id: order.data.checkout.id },
    });

    // TODO close cart alternative due to not needing to actually close the cart
    closeCart();
    // turn loader off
    setLoading(false);
    // TODO Understand & implement nProgress.done();
  }
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <DisplayError error={error} />
      <CardElement />
      <button type="submit" className={styles.btn}>
        Checkout
      </button>
    </form>
  );
}
