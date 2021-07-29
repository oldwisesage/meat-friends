import { useMutation, gql } from '@apollo/client';
import styled from 'styled-components';
import {
  border,
  borderRadius,
  boxShadow,
  color,
  fontSize,
} from '../../theme/Variables';
import { CURRENT_USER_QUERY } from '../user/useUser';

const SIGNOUT_MUTATION = gql`
  mutation {
    endSession
  }
`;

const LogoutButton = styled.button`
  border: ${border.fig};
  border-radius: ${borderRadius.default};
  background-color: ${color.white};
  text-decoration: none;
  padding: 0.4rem 2rem;
  max-height: 5rem;
  outline-offset: -2px;
  box-shadow: ${boxShadow.idle};
  font-size: ${fontSize.h4};
  &:hover {
    box-shadow: ${boxShadow.active};
  }
`;

const Logout = () => {
  const [logout] = useMutation(SIGNOUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <LogoutButton
      type="button"
      onClick={() => {
        console.log('⭐️  signing out!');
        logout();
      }}
    >
      Logout
    </LogoutButton>
  );
};
export default Logout;
