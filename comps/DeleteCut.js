import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styles from './DeleteCut.module.scss';

const DELETE_CUT_MUTATION = gql`
  mutation DELETE_CUT_MUTATION($id: ID!) {
    deleteCut(id: $id) {
      id
      name
    }
  }
`;

function update(cache, payload) {
  console.log({ cache, payload });
  cache.evict(cache.identify(payload.data.deleteCut));
}

export default function DeleteCut({ id, children }) {
  const [deleteCut, { loading }] = useMutation(DELETE_CUT_MUTATION, {
    variables: { id },
    update,
  });
  return (
    <button
      type="submit"
      disabled={loading}
      className={styles.button}
      onClick={(e) => {
        if (confirm('Are you sure you want to delete?')) {
          deleteCut().catch((err) => alert(err.message));
        }
      }}
    >
      {children}
    </button>
  );
}
