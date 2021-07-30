import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { border, borderRadius, boxShadow, color } from '../../theme/Variables';
import UserMenuItem from '../ui/UserMenuItem';
import { useDetectOutsideClick } from '../../lib/useDetectOutsideClick';

const UserMenuContainer = styled.div`
  position: relative;
`;

const UserButton = styled.button`
  background-color: ${color.white};
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  padding: 0.5rem;
  border-radius: 50rem;
  border: ${border.thickest};
  &:hover {
    background-color: ${color.greyPale};
  }
  &:active {
    background-color: ${color.greyMid};
  }
`;

const Avatar = styled.div`
  border-radius: 50px;
  background-color: red;
  height: 3.5rem;
  width: 3.5rem;
`;

const AvatarIcon = styled.svg`
  transition: transform 0.2s ease;
  ${(props) => (props.active ? `transform: rotate(90deg)` : null)};
`;

const UserMenu = styled.nav`
  background-color: ${color.white};
  border-radius: ${borderRadius.default};
  border: ${border.thickest};
  box-shadow: ${boxShadow.idle};
  overflow: hidden;
  display: grid;
  position: absolute;
  top: 6rem;
  right: 0rem;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
  ${(props) =>
    props.active
      ? `opacity: 1; visibility: visible; transform: translateY(0);`
      : null}
`;

const User = () => {
  const userMenuRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(userMenuRef, false);

  const onClick = () => setIsActive(!isActive);

  return (
    <UserMenuContainer>
      <UserButton onClick={onClick}>
        <AvatarIcon
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          active={isActive}
        >
          <polyline points="9 18 15 12 9 6" />
        </AvatarIcon>
        <Avatar />
      </UserButton>
      <UserMenu ref={userMenuRef} active={isActive}>
        <UserMenuItem label="Account" link="account" />
        <UserMenuItem label="Help" link="faq" />
        <UserMenuItem label="Logout" link />
      </UserMenu>
    </UserMenuContainer>
  );
};
export default User;
