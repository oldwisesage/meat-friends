import { useMutation, gql } from '@apollo/client';
import { Formik } from 'formik';
import Link from 'next/link';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Button, FormContainer, FormSection } from '../ui/Form';
import Heading from '../Heading';
import { CURRENT_USER_QUERY } from '../user/useUser';
import { Input } from './Input';

const LoginLinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: space-between;
  justify-content: space-between;
  margin-top: 2.5rem;
`;
const LinkText = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  color: #000;
  align-self: flex-end;
  justify-self: ${(props) => props.align};
`;

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
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

const LoginForm = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  if (loading) return null;
  return (
    <FormSection>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Please enter your email')
            .required('Required'),
          password: Yup.string().required('Please enter your password'),
        })}
        onSubmit={async (values) => {
          console.log(values);
          const res = await login({
            variables: values,
            refetchQueries: [{ CURRENT_USER_QUERY }],
          });
          console.log(res);
        }}
      >
        <FormContainer>
          <Heading title="Welcome back!" subtitle="Please log in" />
          <Input
            label="Email address"
            name="email"
            type="text"
            placeholder="Email address"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <Button type="submit">Log in</Button>
          <LoginLinksContainer>
            <Link href="/register">
              <LinkText align="left">Register for a new account</LinkText>
            </Link>
            <Link href="/reset">
              <LinkText align="right">Reset your password</LinkText>
            </Link>
          </LoginLinksContainer>
        </FormContainer>
      </Formik>
    </FormSection>
  );
};

export default LoginForm;
