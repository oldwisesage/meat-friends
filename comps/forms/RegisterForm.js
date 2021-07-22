import { useMutation, gql } from '@apollo/client';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  FormContainer,
  FormSection,
  NamesInputContainer,
} from '../container/Form';
import Heading from '../Heading';
import { CURRENT_USER_QUERY } from '../user/User';
import { Input } from './Input';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $name: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      data: {
        email: $email
        name: $name
        lastName: $lastName
        password: $password
      }
    ) {
      id
      name
      lastName
      email
    }
  }
`;

const RegisterForm = () => {
  const [signup, { data, error, loading }] = useMutation(SIGNUP_MUTATION);

  if (loading) return null;

  if (error) return <div>{error}</div>;

  return (
    // TODO add regular expression to password matches
    // TODO add newsletter signup checkbox
    <FormSection>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'First name must be 15 letters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(25, 'Last name must be 25 letters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email addresss')
            .required('Required'),
          password: Yup.string()
            .min(8, 'Password must be longer than 8 characters')
            .max(15, 'Password cannot be longer than 15 characters')
            .required('You must enter a password'),
          confirmPassword: Yup.string().oneOf(
            [Yup.ref('password'), null],
            'Passwords must match'
          ),
        })}
        onSubmit={async (values) => {
          console.log(values);
          const res = await signup({
            variables: {
              name: values.firstName,
              lastName: values.lastName,
              email: values.email,
              password: values.password,
            },
            refetchQueries: [{ query: CURRENT_USER_QUERY }],
          });
          console.log(res);
        }}
      >
        <FormContainer>
          <Heading title="New here?" subtitle="Create an account below" />
          <NamesInputContainer>
            <Input
              label="First name"
              name="firstName"
              type="text"
              placeholder="First name"
            />
            <Input
              label="Last name"
              name="lastName"
              type="text"
              placeholder="Last name"
            />
          </NamesInputContainer>
          <Input
            label="Email address"
            name="email"
            type="text"
            placeholder="Email address"
          />
          <Input
            label="New password"
            name="password"
            type="password"
            placeholder="New password"
          />
          <Input
            label="Confirm password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
          />
          <Button type="submit">Register</Button>
        </FormContainer>
      </Formik>
    </FormSection>
  );
};

export default RegisterForm;
