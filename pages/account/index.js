import { useState } from 'react';
import styled from 'styled-components';
import useUser from '../../comps/user/useUser';
import Heading from '../../comps/Heading';
import Settings from '../../comps/account/Settings';
import PaymentMethods from '../../comps/account/PayMethods';
import OrderHistory from '../../comps/account/OrderHistory';
import PersonalInfo from '../../comps/account/PersonalInfo';
import Address from '../../comps/account/Address';
import AccountNavBtn from '../../comps/account/AccountNavBtn';

// TODO add dynamic routing to logout, orders, payment, personal, settings
// TODO add graphql query for all user data

const AccountSection = styled.div`
  width: 100vw;
  display: grid;
  place-items: center center;
  padding: 10rem;
`;
const AccountContainer = styled.div`
  min-width: 100rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 5rem;
`;
const InfoContainer = styled.div``;

const NavContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin-top: 2.5rem;
`;
const ComponentContainer = styled.div`
  grid-column: 2;
`;

const AccountPage = () => {
  const user = useUser();
  // const [activeComp, setActiveComp] = useState('');
  if (!user) return null;

  return (
    <AccountSection>
      {/* COMP AccountNav */}
      <AccountContainer>
        <InfoContainer>
          <Heading title={`Hello ${user.name}!`} subtitle={user.email} />
          {/* COMP AccountNav */}
          <NavContainer>
            <AccountNavBtn comp="Order History" />
            <AccountNavBtn comp="Subscriptions" />
            <AccountNavBtn comp="Payment Methods" />
            <AccountNavBtn comp="Address" />
            <AccountNavBtn comp="Settings" active />
            <AccountNavBtn comp="Logout" />
          </NavContainer>
        </InfoContainer>
        <ComponentContainer>
          <Settings active />
          <PaymentMethods />
          <Address />
          <OrderHistory id={user.id} />
          <PersonalInfo />
        </ComponentContainer>
      </AccountContainer>
    </AccountSection>
  );
};

export default AccountPage;
