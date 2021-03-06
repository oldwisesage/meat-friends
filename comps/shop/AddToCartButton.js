import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CURRENT_USER_QUERY } from '../user/useUser';
import { Button } from '../ui/Form';

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(cutId: $id) {
      id
    }
  }
`;

const AddButton = styled(Button)`
  margin: 0.5rem 0;
`;

const AddToCartButton = ({ id }) => {
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  //   if (loading)
  // do something;

  return (
    <AddButton type="button" disabled={loading} onClick={addToCart}>
      Add{loading && 'ing'} to cart
    </AddButton>
  );
};

AddToCartButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default AddToCartButton;
