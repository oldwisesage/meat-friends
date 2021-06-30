import Link from 'next/link';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Heading from './Heading';
import styles from './Login.module.scss';
import useForm from '../lib/useForm';
import { CURRENT_USER_QUERY } from './User';
import ErrorDisplay from './ErrorMessage';

// TODO implement social login in - facebook? google? github?

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

export default function Login() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({});

  const [login, { data, loading }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
    const res = await login();
    console.log(data);
    console.log(res);
    clearForm();
    resetForm();
  }
  const error =
    data?.authenticateUserWithPassword?.__typename ===
    'UserAuthenticationWithPasswordFailure'
      ? data?.authenticateUserWithPassword
      : undefined;
  return (
    <div className={styles.container}>
      <Heading title="Welcome Back!" subtitle="Please login" />
      <ErrorDisplay error={error} />
      <div className={styles.form}>
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
            Sign in
          </button>
        </form>
      </div>
      {/* TODO create forgot password functionality */}
      {/* <div className={styles.forgot}>
        <Link href="/">
          <a className={styles.forgot_text}>Forgot your password?</a>
        </Link>
      </div> */}
      {/* <div className={styles.twitter}>
        <button className={styles.twitter_btn}></button>
      </div>
      <div className={styles.github}>
        <button className={styles.github_btn}></button>
      </div>
      <div className={styles.facebook}>
        <button className={styles.facebook_btn}></button>
      </div> */}
      <div className={styles.links}>
        <Link href="/register">
          <a className={styles.links_register}>Create new account</a>
        </Link>
        <Link href="/reset">
          <a className={styles.links_reset}>Forgot your password?</a>
        </Link>
      </div>
    </div>
  );
}
