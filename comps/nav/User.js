import Link from 'next/link';
import styled from 'styled-components';
import { borderRadius, color } from '../../theme/Variables';

const UserContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  padding: 0.5rem;
  border-radius: 50rem;
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
  height: 4.5rem;
  width: 4.5rem;
`;

const AvatarIcon = styled.svg``;

const User = () => (
  <Link href="/account">
    <UserContainer>
      <AvatarIcon
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="9 18 15 12 9 6" />
      </AvatarIcon>
      <Avatar />
    </UserContainer>
  </Link>
);
export default User;
