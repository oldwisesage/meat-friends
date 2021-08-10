import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color } from '../../theme/Variables';

const REMOVE_FROM_CART = gql`
  mutation REMOVE_FROM_CART($id: ID!) {
    deleteCartItem(id: $id) {
      id
      __typename
    }
  }
`;
const HoverClickable = styled.button`
  align-self: center;
  justify-self: center;
  border: none;
  background: none;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background-color: rgba(${color.greyPale}, 0.5);
  }
  &:active {
    background: rgba(${color.greyMid}, 0.5);
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem));
}

const RemoveFromCartButton = ({ id }) => {
  const [removeFromCart, { loading }] = useMutation(REMOVE_FROM_CART, {
    variables: { id },
    update,
    // optimisticResponse: {
    //   deleteCartItem: { id__typename: 'CartItem', id },
    // },
  });
  return (
    <HoverClickable disabled={loading} type="button" onClick={removeFromCart}>
      <svg
        width="20pt"
        height="20pt"
        version="1.1"
        viewBox="-2 -5 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="m31.25 71.875c-0.80078 0-1.5977-0.30469-2.2109-0.91406-1.2188-1.2188-1.2188-3.1992 0-4.418l37.5-37.5c1.2188-1.2188 3.1992-1.2188 4.418 0s1.2188 3.1992 0 4.418l-37.5 37.5c-0.60938 0.60937-1.4062 0.91406-2.207 0.91406z" />
          <path d="m68.75 71.875c-0.80078 0-1.5977-0.30469-2.2109-0.91406l-37.5-37.5c-1.2188-1.2188-1.2188-3.1992 0-4.418s3.1992-1.2188 4.418 0l37.5 37.5c1.2188 1.2188 1.2188 3.1992 0 4.418-0.60938 0.60937-1.4062 0.91406-2.207 0.91406z" />
        </g>
      </svg>
    </HoverClickable>
  );
};

RemoveFromCartButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RemoveFromCartButton;
