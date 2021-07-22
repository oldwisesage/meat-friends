import { Formik, Form } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Input } from './Input';
import { MessageInput } from './MessageInput';
import { SelectSubject } from './SelectSubject';
import Heading from '../Heading';

const FormSection = styled.div`
  display: grid;
  place-items: center center;
  min-height: 50rem;
`;

const FormContainer = styled(Form)`
  display: grid;
  grid-gap: 2rem;
  width: 50rem;
  padding: 5rem;
  border: 0.5px solid #e0e0e0;
  border-radius: 5px;
`;

const NamesInputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`;

const Button = styled.button`
  text-decoration: none;
  border: none;
  padding: 0.4rem 2rem;
  max-height: 5rem;
  font-size: $m2-font;
  border-radius: $border-radius;
  color: #fff;
  background-color: #000;
  font-size: 1.563rem;
  border-radius: 5px;
  &:hover {
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.04);
  }
`;

const phoneRegEx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// TODO add all normal form contact needs to this so that I have an exaple of all of theme
// TODO Create a custom dropdown component to be able to
// TODO add some sort of error styling that is effective

const PlayFormik = () => (
  <FormSection>
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
        phone: Yup.string()
          .matches(phoneRegEx, 'Phone number is not valid')
          .required('Required'),
        subject: Yup.string()
          .oneOf(['shipping', 'payment', 'order'], 'Please choose a subject')
          .required('Required'),
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
        <Heading title="Formik" />
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
          label="Phone number"
          name="phone"
          type="text"
          placeholder="Phone number"
        />
        <SelectSubject label="subject" name="subject">
          <option value="">Please choose a subject</option>
          <option value="shipping">Shipping information</option>
          <option value="payment">Payment issue</option>
          <option value="order">Order issue</option>
        </SelectSubject>
        <MessageInput
          label="Message"
          name="message"
          type="text"
          placeholder="Please enter your message here"
        />

        <Button type="submit">Submit</Button>
      </FormContainer>
    </Formik>
  </FormSection>
);

export default PlayFormik;
