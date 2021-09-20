import { Formik } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import Airtable from 'airtable';
import { init, send } from 'emailjs-com';
import { useState } from 'react';
import { Input } from '../forms/Input';
import { MessageInput } from '../forms/MessageInput';
import { Button, FormContainer, NamesInputContainer } from '../ui/Form';
import { fontSize, fontWeight } from '../../theme/Variables';
import { SimpleLoader } from '../ui/Loader';
import { device } from '../../theme/Breakpoints';

const WelcomeFormContainer = styled.div`
  height: 31.6rem;
  @media ${device.phone} {
    width: 100%;
  }
  width: 50rem;
`;

const WelcomeButton = styled(Button)`
  margin-top: 2rem;
  padding: 1rem;
`;

const FinishedMessage = styled.div`
  padding-top: 2rem;
  h2 {
    font-size: ${fontSize.h2};
    font-weight: ${fontWeight.mid};
  }
  p {
    padding-top: 1rem;
    font-size: ${fontSize.h4};
    font-weight: ${fontWeight.light};
  }
`;

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);

const WelcomeForm = () => {
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(false);
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
  const sendWelcomeEmail = (values) => {
    const templateParams = {
      to_name: values.firstName,
    };
    send('service_lyuy8ij', 'template_q9mdznl', templateParams);
  };

  return (
    <WelcomeFormContainer>
      {finished && (
        <FinishedMessage>
          <h2>Welcome email sent, thank you!</h2>
          <p>
            Keep an eye on your email. We will be in touch about our launch date
            & updates on our progress.
          </p>
        </FinishedMessage>
      )}
      {loading && <SimpleLoader />}
      {!finished && !loading && (
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, 'Must be 15 characters or more')
              .required('Required'),
            lastName: Yup.string()
              .max(20, 'Must be 20 characters or more')
              .required('Required'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            message: Yup.string()
              .min(5, 'Please enter a detailed message')
              .required('Required'),
          })}
          onSubmit={(values, { resetForm }) => {
            postToAirtable(values);
            sendWelcomeEmail(values);
            resetForm();
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              setFinished(true);
            }, 1000);
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
      )}
    </WelcomeFormContainer>
  );
};

export default WelcomeForm;
