import styled from 'styled-components';
import { Button } from '../ui/Form';

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

const OtherPayButtons = () => (
  <OtherPayContainer>
    <ApplePay type="button">Apple</ApplePay>
    <PayPal type="button">PayPal</PayPal>
    <GooglePay type="button">GPay</GooglePay>
  </OtherPayContainer>
);
export default OtherPayButtons;
