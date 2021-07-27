import styled from 'styled-components';
import Heading from '../Heading';
import AddNewButton from './AddNewButton';
import PayMethod from './PayMethod';

// TODO add crud ability with this payment situation
const PayMethodsContainer = styled.div`
  max-width: 75rem;
`;

const PayMethods = ({ active }) => {
  console.log(active);
  if (!active) return null;
  return (
    <PayMethodsContainer>
      <Heading title="Payment Methods" />
      <PayMethod />
      <AddNewButton text="payment method" />
    </PayMethodsContainer>
  );
};
export default PayMethods;
