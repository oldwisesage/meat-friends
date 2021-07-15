import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import styles from './RequestReset.module.scss';
import Heading from '../Heading';
import ErrorDisplay from '../error/ErrorMessage';
import { CURRENT_USER_QUERY } from './User';
import useForm from '../../lib/useForm';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      message
      code
    }
  }
`;

export default function RequestReset() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    email: '',
  });

  const [reset, { data, loading, error }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await reset();
    console.log(res);
    clearForm();
    resetForm();
  }
  return (
    <div className={styles.container}>
      <Heading
        title="Forgot your password?"
        subtext="Enter your email and a link will be sent to your email"
      />
      <ErrorDisplay error={error} />
      <div className={styles.form}>
        {data?.sendUserPasswordResetLink === null && (
          <p>Success! Check your provided email for a link</p>
        )}
        <form
          className={styles.form_group}
          method="post"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email">
            <input
              type="text"
              className={styles.form_input}
              placeholder="email"
              id="email"
              value={inputs.email}
              onChange={handleChange}
              name="email"
              required
            />
          </label>
          <button type="submit" className={styles.submit}>
            Send password reset email
          </button>
        </form>
      </div>
    </div>
  );
}
