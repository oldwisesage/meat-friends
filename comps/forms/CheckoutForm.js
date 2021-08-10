import { useMutation } from '@apollo/client';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Formik } from 'formik';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
// import Link from 'next/link';
import {
  Button,
  FormContainer,
  FormSection,
  NamesInputContainer,
} from '../ui/Form';
import Heading from '../Heading';
import { Input } from './Input';
import { SelectSubject } from './SelectSubject';
import OtherPayButtons from './OtherPayButtons';

const AddressInputContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr 2fr;
  grid-gap: 2rem;
`;

const CheckoutFormContainer = styled.div`
  border: 2px solid #000;
  padding: 2.5rem;
  border-radius: 5px;
  background-color: white;
`;

const PayContainer = styled.div`
  display: grid;
  border: 0.5px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.04);
  padding: 0.25rem 0.5rem;
  min-height: 3rem;
  align-items: center;
  font-size: 1.958rem;
  font-weight: 200;
  margin-bottom: 2rem;
`;

// TODO add a backlink into here
// TODO add actual states selection into validation
// TODO Complete functionality here to fully implement

const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION($token: String!) {
    checkout(token: $token) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`;

const states = ['MD', 'NY', 'PA', 'VA', 'DE'];

const CheckoutForm = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [checkout, { error: graphQLError }] = useMutation(
    CREATE_ORDER_MUTATION
  );
  return (
    <FormSection>
      {/* TODO add some sort of backlink & a logo here<BackLink href="/">
        <a>⬅️ Return</a>
      </BackLink> */}
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          street: '',
          city: '',
          state: '',
          zip: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email()
            .required('Please enter your email address'),
          firstName: Yup.string().required('Please enter your first name'),
          lastName: Yup.string().required('Please enter your last name'),
          street: Yup.string().required('Please enter your street address'),
          city: Yup.string().required('Please enter your city'),
          state: Yup.string().required('Please select your state'),
          zip: Yup.string().required('Please enter a zip code'),
        })}
        onSubmit={async () => {
          console.log(`✅ Stripe checkout initialized`);
          const cardElement = elements.getElement(CardElement);
          const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
          });
          if (error) {
            setError(error);
            console.log(`🤯 Error: ${error}`);
            return null;
          }
          console.log(`💳 Payment method:`, { paymentMethod });
          const order = await checkout({
            variables: { token: paymentMethod.id },
          });
          router.push({
            pathname: `/order/[id]`,
            query: { id: order.data.checkout.id },
          });
        }}
      >
        <CheckoutFormContainer>
          <FormContainer>
            <Heading title="Checkout" subtitle="Enter your payment details" />
            <Input
              name="email"
              type="email"
              label="Email address"
              placeholder="Email address"
            />
            <NamesInputContainer>
              <Input
                type="text"
                name="firstName"
                label="First name"
                placeholder="First name"
              />
              <Input
                name="lastName"
                type="text"
                label="Last name"
                placeholder="Last name"
              />
            </NamesInputContainer>
            <Input
              name="street"
              type="text"
              label="Street address"
              placeholder="Street address"
            />
            <AddressInputContainer>
              <Input name="city" type="text" label="City" placeholder="City" />
              <SelectSubject name="state" label="state">
                <option value="">State</option>
                {states.map((state, index) => (
                  <option value="state" key={index}>
                    {state}
                  </option>
                ))}
              </SelectSubject>
              <Input
                name="zip"
                type="text"
                label="Zip code"
                placeholder="Zip code"
              />
            </AddressInputContainer>
            <PayContainer>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: '16px',
                      color: '#000',
                      fontWeight: '100',
                      '::placeholder': {
                        color: '#e0e0e0',
                      },
                    },
                    invalid: { color: '#904d50' },
                    complete: { color: '#798465' },
                  },
                }}
              />
            </PayContainer>
            <Button type="submit">Submit your order</Button>
            <OtherPayButtons />
          </FormContainer>
        </CheckoutFormContainer>
      </Formik>
    </FormSection>
  );
};
export default CheckoutForm;
