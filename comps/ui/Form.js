import { Form } from 'formik';
import styled from 'styled-components';

export const FormSection = styled.div`
  display: grid;
  place-items: center center;
  min-height: 50rem;
  width: 100%;
`;

export const FormContainer = styled(Form)`
  display: grid;
  grid-gap: 2rem;
  width: 50rem;
  border-radius: 5px;
  background-color: #fff;
`;

export const NamesInputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`;

export const Button = styled.button`
  text-decoration: none;
  border: none;
  padding: 0.4rem 2rem;
  max-height: 5rem;
  font-size: 1.958rem;
  border-radius: $border-radius;
  color: #fff;
  background-color: #000;
  font-size: 1.563rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.04);
  }
`;
