import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from '../Heading';
import AddNewButton from './AddNewButton';
import AddressBtn from './AddressBtn';
// TODO add crud ability with this address situation
const AccountContainer = styled.div`
  max-width: 75rem;
`;

const Address = ({ active }) => {
  if (!active) return null;
  return (
    <AccountContainer>
      <Heading title="Addresses" />
      <AddressBtn />
      <AddNewButton text="address" />
    </AccountContainer>
  );
};

Address.propTypes = {
  active: PropTypes.bool,
};

export default Address;
