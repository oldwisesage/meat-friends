import styled from 'styled-components';
import Cart from '../cart/Cart';
import Logout from './Logout';
import useUser from '../user/useUser';
import Logo from '../Logo';
import NavLink from './NavLink';
import CartIcon from './CartIcon';
import Login from './Login';
import User from './User';
import UserMenuModal from '../ui/UserMenuModal';

// TODO improve styling so it looks coo ler

const NavContainer = styled.div`
  position: sticky;
  top: 0;
  display: grid;
  align-items: center;
  align-content: center;
  height: 8rem;
  grid-template-columns: 25rem 1fr 25rem;
  box-shadow: inset 0px 50px 26px 50px rgba(255, 255, 255, 0.8);
`;

const NavLinkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
`;

const AccountContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
`;

const Nav = () => {
  const user = useUser();

  return (
    <>
      <NavContainer>
        <Logo />
        <NavLinkContainer>
          <NavLink link="meats" text="shop" />
          <NavLink link="about" text="about" />
          <NavLink link="contact" text="contact" />
        </NavLinkContainer>
        <AccountContainer>
          {user ? (
            <>
              <User />
              <CartIcon user={user} />{' '}
            </>
          ) : (
            <Login />
          )}
        </AccountContainer>
      </NavContainer>
      <Cart />
    </>
  );
};
export default Nav;
