import styled from 'styled-components';
import {
  borderRadius,
  boxShadow,
  color,
  fontSize,
  fontWeight,
} from '../../theme/Variables';

const DaAddNewButton = styled.button`
  width: 100%;
  background-color: ${color.white};
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  margin-top: 1rem;
  border: 1px solid ${color.greyPale};
  padding: 1rem 2rem;
  border-radius: ${borderRadius.default};
  box-shadow: ${boxShadow.idle};
  &:hover {
    box-shadow: ${boxShadow.active};
  }
  p {
    font-size: ${fontSize.body};
    font-weight: ${fontWeight.light};
    color: ${color.greyMid};
  }
`;

const AddNewButton = ({ text }) => (
  <DaAddNewButton type="button">
    <p>Add new {text}</p>
  </DaAddNewButton>
);
export default AddNewButton;
