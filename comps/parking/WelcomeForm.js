import { Formik } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Input } from '../forms/Input';
import { MessageInput } from '../forms/MessageInput';
import { Button, FormContainer, NamesInputContainer } from '../ui/Form';

const WelcomeButton = styled(Button)`
  margin-top: 2rem;
  padding: 1rem;
`;

const WelcomeForm = () => (
  <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    }}
    validationSchema={Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or more')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or more')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string()
        .min(5, 'Please enter a detailed message')
        .required('Required'),
    })}
    onSubmit={(values) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      }, 400);
    }}
  >
    <FormContainer>
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
      <MessageInput
        label="Message"
        name="message"
        type="text"
        placeholder="Please enter your message here"
      />
      <WelcomeButton type="submit">Join the waitlist</WelcomeButton>
    </FormContainer>
  </Formik>
);

export default WelcomeForm;
