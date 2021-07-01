import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styles from './RemoveFromCart.module.scss';

const REMOVE_FROM_CART = gql`
  mutation REMOVE_FROM_CART($id: ID!) {
    deleteCartItem(id: $id) {
      id
      __typename
    }
  }
`;
// LEARN understand apollo cache
function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem));
}

export default function RemoveFromCart({ id }) {
  const [removeFromCart, { loading }] = useMutation(REMOVE_FROM_CART, {
    variables: { id },
    update,
    // optimisticResponse: {
    //   deleteCartItem: { id__typename: 'CartItem', id },
    // },
  });
  return (
    <button
      className={styles.btn}
      disabled={loading}
      type="button"
      onClick={removeFromCart}
    >
      <svg
        width="20pt"
        height="20pt"
        version="1.1"
        viewBox="-2 -5 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.btn_icon}
      >
        <g>
          <path d="m31.25 71.875c-0.80078 0-1.5977-0.30469-2.2109-0.91406-1.2188-1.2188-1.2188-3.1992 0-4.418l37.5-37.5c1.2188-1.2188 3.1992-1.2188 4.418 0s1.2188 3.1992 0 4.418l-37.5 37.5c-0.60938 0.60937-1.4062 0.91406-2.207 0.91406z" />
          <path d="m68.75 71.875c-0.80078 0-1.5977-0.30469-2.2109-0.91406l-37.5-37.5c-1.2188-1.2188-1.2188-3.1992 0-4.418s3.1992-1.2188 4.418 0l37.5 37.5c1.2188 1.2188 1.2188 3.1992 0 4.418-0.60938 0.60937-1.4062 0.91406-2.207 0.91406z" />
        </g>
      </svg>
    </button>
  );
}
