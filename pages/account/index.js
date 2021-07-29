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
  const [state, setState] = useState([
    { id: '95933', comp: 'Order History' },
    { id: '32423', comp: 'Personal information' },
    { id: '12423', comp: 'Address' },
    { id: '11233', comp: 'Payment methods' },
    { id: '04933', comp: 'Settings' },
  ]);

  if (!user) return null;

  return (
    <AccountSection>
      {/* COMP AccountNav */}
      <AccountContainer>
        <InfoContainer>
          <Heading title={`Hello ${user.name}!`} subtitle={user.email} />
          {/* COMP AccountNav */}
          <NavContainer>
            {state.map((accLink, index) => (
              <AccountNavBtn
                comp={accLink.comp}
                key={index}
                active={accLink.isActive}
                link={accLink.link}
              />
            ))}
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
