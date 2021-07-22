import { useMutation } from '@apollo/client';
import { Formik } from 'formik';
import gql from 'graphql-tag';
import * as Yup from 'yup';
import { Button, FormContainer, FormSection } from '../container/Form';
import Heading from '../Heading';
import { CURRENT_USER_QUERY } from '../user/User';
import { Input } from './Input';

const FORGOT_PASSWORD_MUTATION = gql`
  mutation FORGOT_PASSWORD_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      message
      code
    }
  }
`;

const ForgotPassword = () => {
  const [reset, { data, loading, error }] = useMutation(
    FORGOT_PASSWORD_MUTATION
  );
  return (
    <FormSection>
      <Formik
        intialValues={{ email: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Please enter your email address')
            .required('Required'),
        })}
        onSubmit={async (values) => {
          await reset({
            variables: values,
            refetchQueries: [{ query: CURRENT_USER_QUERY }],
          });
        }}
      >
        <FormContainer>
          <Heading
            title="Forgot your password?"
            subtitle="Enter your email to reset your password"
          />
          <Input
            label="Email address"
            name="email"
            type="email"
            placeholder="Email address"
          />
          <Button type="submit">Send password reset email</Button>
        </FormContainer>
      </Formik>
    </FormSection>
  );
};
export default ForgotPassword;
