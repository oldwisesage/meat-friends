import { useMutation } from '@apollo/client';
import { Formik } from 'formik';
import gql from 'graphql-tag';
import * as Yup from 'yup';
import { Input } from './Input';
import { FormSection, FormContainer, Button } from '../container/Form';
import { CURRENT_USER_QUERY } from '../user/User';
import Heading from '../Heading';

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

const ResetPassword = ({ token }) => {
  const [reset, { data, loading }] = useMutation(RESET_MUTATION);
  if (loading) return null;
  // TODO fix this error thing
  //   const error = data?.redeemUserPasswordResetToken?.code
  //     ? data?.redeemUserPasswordResetToken
  //     : undefined;
  return (
    <FormSection>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Please enter an email address')
            .required('Required'),
          password: Yup.string()
            .min(8, 'Password must be 8 characters or more')
            .max(15, 'Password must be 15 characters of less')
            .required('Required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Password must match')
            .required('Required'),
        })}
        onSubmit={async (values) => {
          console.log(values);
          const res = await reset({
            variables: {
              email: values.email,
              password: values.password,
              token,
            },
            refetchQueries: [{ query: CURRENT_USER_QUERY }],
          });
          console.log(res);
        }}
      >
        <FormContainer>
          <Heading
            title="Reset your password"
            subtitle="Enter your email with a new password"
          />
          <Input
            name="email"
            type="email"
            label="Email address"
            placeholder="Email address"
          />
          <Input
            name="password"
            type="password"
            label="New password"
            placeholder="New password"
          />
          <Input
            type="password"
            name="confirmPassword"
            label="Confirm password"
            placeholder="Confirm password"
          />
          <Button type="submit">Reset your password</Button>
        </FormContainer>
      </Formik>
    </FormSection>
  );
};
export default ResetPassword;
