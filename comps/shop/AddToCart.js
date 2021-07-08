import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from '../user/User';
import styles from './AddToCart.module.scss';

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(cutId: $id) {
      id
    }
  }
`;

export default function AddToCart({ id }) {
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  //   if (loading)
  // do something;

  return (
    <button
      type="button"
      disabled={loading}
      onClick={addToCart}
      className={styles.btn}
    >
      Add{loading && 'ing'} to cart
    </button>
  );
}
