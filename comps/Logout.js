import { useMutation, gql } from '@apollo/client';
import styles from './Logout.module.scss';
import { CURRENT_USER_QUERY } from './User';

const SIGNOUT_MUTATION = gql`
  mutation {
    endSession
  }
`;

export default function Logout() {
  const [logout] = useMutation(SIGNOUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <button
      type="button"
      className={styles.logout}
      onClick={() => {
        console.log('⭐️  signing out!');
        logout();
      }}
    >
      log out
    </button>
  );
}
