import Link from 'next/link';
import { gql, useMutation } from '@apollo/client';
import styles from './Register.module.scss';
import Heading from '../Heading';
import ErrorDisplay from '../error/ErrorMessage';
import { CURRENT_USER_QUERY } from './User';
import useForm from '../../lib/useForm';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(data: { email: $email, name: $name, password: $password }) {
      id
      email
      name
    }
  }
`;

export default function Login() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    email: '',
    name: '',
    password: '',
  });

  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
    // TODO Refetch currently logged in user
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
    const res = await signup();
    console.log({ data, loading, error });
    console.log(res);
    clearForm();
    resetForm();
  }
  // LEARN understand how this actually works
  // const error =
  //   data?.authenticateUserWithPassword?.__typename ===
  //   'UserAuthenticationWithPasswordFailure'
  //     ? data?.authenticateUserWithPassword
  //     : undefined;
  return (
    <div className={styles.container}>
      <Heading title="New here?" subtitle="Create an account below" />
      <ErrorDisplay error={error} />
      <div className={styles.form}>
        {/* TODO figure out how this actually works  */}
        {data?.createUser && (
          <p>
            Signed up with {data.createUser.email} - Please go ahead and sign
            in!
          </p>
        )}
        <form
          className={styles.form_group}
          method="post"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">
            <input
              type="text"
              className={styles.form_input}
              placeholder="name"
              id="name"
              value={inputs.name}
              onChange={handleChange}
              name="name"
              required
            />
          </label>
          {/* TODO add firstname last name to database schema */}
          {/* <div className={styles.form_group_top}>
            <label htmlFor="firstName">
              <input
                type="text"
                className={styles.form_input}
                placeholder="first name"
                id="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                name="firstName"
                required
              />
            </label>
            <label htmlFor="lastName">
              <input
                type="text"
                className={styles.form_input}
                placeholder="last name"
                id="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                name="lastName"
                required
              />
            </label>
          </div> */}
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
          {/* TODO add confirm password */}
          {/* <label htmlFor="confirmPassword">
            <input
              type="password"
              className={styles.form_input}
              placeholder="confirm password"
              id="confirmPassword"
              value={inputs.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              required
            />
          </label> */}
          {/* <label className={styles.form_check} htmlFor="checkbox">
            <input
              type="checkbox"
              className={styles.form_check_box}
              id="signup"
            />
            <p className={styles.form_input_check_text}>
              Want to stay update to date with the latest news & offers?
            </p>
          </label> */}
          <button type="submit" className={styles.submit}>
            Create new account
          </button>
        </form>
      </div>
    </div>
  );
}
