import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import styles from './RequestReset.module.scss';
import Heading from '../Heading';
import ErrorDisplay from '../error/ErrorMessage';
import { CURRENT_USER_QUERY } from './User';
import useForm from '../../lib/useForm';

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $email: String!
    $password: String!
    $token: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      password: $password
      token: $token
    ) {
      message
      code
    }
  }
`;

export default function Reset({ token }) {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    email: '',
    password: '',
    token,
  });

  const [reset, { data, loading, error }] = useMutation(RESET_MUTATION, {
    variables: inputs,
    // TODO Refetch currently logged in user
    // refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const errorTwo = data?.redeemUserPasswordResetToken?.code
    ? data?.redeemUserPasswordResetToken
    : undefined;
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
    const res = await reset();
    console.log(res);
    clearForm();
    resetForm();
  }

  return (
    <div className={styles.container}>
      <Heading
        title="Reset your password"
        subtext="Enter your email with a new password"
      />
      <ErrorDisplay error={error || errorTwo} />
      <div className={styles.form}>
        {/* TODO style this notification */}
        {data?.redeemUserPasswordResetToken === null && (
          <p>Success! Please continue to log in</p>
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
          <label htmlFor="password">
            <input
              type="password"
              className={styles.form_input}
              placeholder="password"
              id="password"
              value={inputs.password}
              onChange={handleChange}
              name="password"
              required
            />
          </label>
          <button type="submit" className={styles.submit}>
            Reset password
          </button>
        </form>
      </div>
    </div>
  );
}
