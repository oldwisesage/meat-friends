import { Form } from 'formik';
import styled from 'styled-components';
import { device } from '../../theme/Breakpoints';
import { borderRadius, color, fontSize } from '../../theme/Variables';

export const FormSection = styled.div`
  display: grid;
  place-items: center center;
  width: 100%;
  @media ${device.tablet} {
    min-height: 50rem;
  }
`;

export const FormContainer = styled(Form)`
  display: grid;
  border-radius: 5px;
  @media ${device.phone} {
    width: 100%;
    grid-gap: 1.5rem;
  }
  @media ${device.tablet} {
    width: 50rem;
    grid-gap: 2rem;
  }
`;

export const NamesInputContainer = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }
`;

export const Button = styled.button`
  text-decoration: none;
  border: none;
  padding: 0.4rem 2rem;
  max-height: 5rem;
  font-size: ${fontSize.h4};
  border-radius: ${borderRadius.default};
  color: ${color.black};
  background-color: ${color.white};
  border: 2px solid ${color.black};
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.04);
  }
`;
