import { Formik, Form } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Input } from './Input';
import { MessageInput } from './MessageInput';
import { SelectSubject } from './SelectSubject';
import { Button, FormContainer, NamesInputContainer } from '../container/Form';

const ContactForm = () => (
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
);

export default ContactForm;
