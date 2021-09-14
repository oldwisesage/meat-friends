import { Formik } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import Airtable from 'airtable';
import { Input } from '../forms/Input';
import { MessageInput } from '../forms/MessageInput';
import { Button, FormContainer, NamesInputContainer } from '../ui/Form';

const WelcomeButton = styled(Button)`
  margin-top: 2rem;
  padding: 1rem;
`;

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};
console.log(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const WelcomeForm = () => {
  const postToAirtable = (values) => {
    base('WelcomeForm').create(
      [
        {
          fields: {
            'First name': values.firstName,
            'Last name': values.lastName,
            'Email address': values.email,
            'Something about them': values.message,
          },
        },
      ],
      (err, records) => {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      }
    );
  };

  return (
    <Formik
      initialValues={initialValues}
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
      onSubmit={(values, { resetForm }) => {
        postToAirtable(values);
        resetForm();
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
          placeholder="What's your favorite cut or your most memorable meat story?"
        />
        <WelcomeButton type="submit">Join the waitlist</WelcomeButton>
      </FormContainer>
    </Formik>
  );
};

export default WelcomeForm;
