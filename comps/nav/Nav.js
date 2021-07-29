import styled from 'styled-components';
import Cart from '../cart/Cart';
import Logout from './Logout';
import useUser from '../user/useUser';
import Logo from '../Logo';
import NavLink from '../NavLink';
import CartIcon from './CartIcon';
import Login from './Login';
import User from './User';

// TODO improve styling so it looks coo ler

const NavContainer = styled.div`
  display: grid;
  align-items: center;
  align-content: center;
  height: 8rem;
  grid-template-columns: 25rem 1fr auto;
`;

const NavLinkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
`;

const AccountContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column: 6;
  place-items: center;
`;

const Nav = () => {
  const user = useUser();

  return (
    <NavContainer>
      <Logo />
      <NavLinkContainer>
        <NavLink link="meats" text="shop" />
        <NavLink link="about" text="about" />
        <NavLink link="contact" text="contact" />
      </NavLinkContainer>
      {/*  COMP <Account /> */}
      <AccountContainer>
        <User />
        <Login />
        <Logout />
        <CartIcon user={user} />
      </AccountContainer>
      <Cart />
    </NavContainer>
  );
};
export default Nav;
