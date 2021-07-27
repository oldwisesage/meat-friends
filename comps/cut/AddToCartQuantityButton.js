import styled from 'styled-components';
import {
  borderRadius,
  color,
  fontSize,
  fontWeight,
} from '../../theme/Variables';
import { Button } from '../ui/Form';

const AddToCartButtonContainer = styled.div`
  display: flex;
  margin-top: 5rem;
`;

const CutQuantity = styled.div`
  padding: 0.5rem 2rem;
  height: 100%;
  background-color: transparent;
  font-size: ${fontSize.body};
  font-weight: ${fontWeight.bold};
  color: ${color.black};
  border: 2px solid ${color.black};
  border-radius: ${borderRadius.default} 0 0 ${borderRadius.default};
`;

const AddButton = styled(Button)`
  padding: 0.5rem 2rem;
  border: 2px solid ${color.black};
  border-radius: 0 ${borderRadius.default} ${borderRadius.default} 0;
`;

const AddToCartQuantityButton = () => (
  <AddToCartButtonContainer>
    <CutQuantity>1</CutQuantity>
    <AddButton>Add to cart</AddButton>
  </AddToCartButtonContainer>
);
export default AddToCartQuantityButton;
