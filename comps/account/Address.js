import styled from 'styled-components';
import Heading from '../Heading';
import AddNewButton from './AddNewButton';
import AddressBtn from './AddressBtn';

// TODO add crud ability with this address situation
const AccountContainer = styled.div`
  max-width: 75rem;
`;

export default function Address({ active }) {
  if (!active) return null;
  return (
    <AccountContainer>
      <Heading title="Addresses" />
      <AddressBtn />
      <AddNewButton text="address" />
    </AccountContainer>
  );
}
