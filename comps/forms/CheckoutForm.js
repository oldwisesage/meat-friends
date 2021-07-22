import { useMutation } from '@apollo/client';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Formik } from 'formik';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import Link from 'next/link';
import {
  Button,
  FormContainer,
  FormSection,
  NamesInputContainer,
} from '../container/Form';
import Heading from '../Heading';
import { Input } from './Input';
import { SelectSubject } from './SelectSubject';

const AddressInputContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr 2fr;
  grid-gap: 2rem;
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

const OtherPayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem;
  border: 0.5px solid #e0e0e0;
  border-radius: 5px;
  grid-gap: 0.5rem;
  margin-top: 0.5rem;
`;
const ApplePay = styled(Button)``;
const PayPal = styled(Button)`
  background-color: darkblue;
`;
const GooglePay = styled(Button)`
  background-color: goldenrod;
`;
// TODO add a backlink into here

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
      <BackLink href="/">
        <a>⬅️ Return</a>
      </BackLink>
      <Formik
        intialValues={{
          firstName: '',
          lastName: '',
          street: '',
          city: '',
          state: '',
          zip: '',
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required('Please enter your first name'),
          lastName: Yup.string().required('Please enter your last name'),
          street: Yup.string().required('Please enter your street address'),
          city: Yup.string().required('Please enter your city'),
          state: Yup.string()
            .oneOf([], 'Please select your state')
            .required('Please select your state'),
          zip: Yup.string().required('Please enter a zip code'),
        })}
        onSubmit={async (values) => {
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
        <FormContainer>
          <Heading title="Checkout" subtitle="Enter your payment details" />
          <NamesInputContainer>
            <Input
              name="firstName"
              type="text"
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
          <AddressInputContainer>
            <Input
              name="street"
              type="text"
              label="Street address"
              placeholder="Street address"
            />
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
          <OtherPayContainer>
            <ApplePay type="submit">Apple</ApplePay>
            <PayPal type="submit">PayPal</PayPal>
            <GooglePay type="submit">GPay</GooglePay>
          </OtherPayContainer>
        </FormContainer>
      </Formik>
    </FormSection>
  );
};
export default CheckoutForm;
