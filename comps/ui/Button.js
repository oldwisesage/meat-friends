import styled from 'styled-components';
import { borderRadius } from '../../theme/Variables';

export const Button = styled.button`
  text-decoration: none;
  border: none;
  padding: 0.4rem 2rem;
  max-height: 5rem;
  font-size: 1.958rem;
  border-radius: ${borderRadius.default};
  color: #fff;
  background-color: #000;
  font-size: 1.563rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.04);
  }
`;
