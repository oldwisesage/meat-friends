import Link from 'next/link';
import styled from 'styled-components';
import { color, fontSize, fontWeight } from '../../theme/Variables';

const MenuItem = styled.div`
  display: grid;
  padding: 1rem 2.5rem;
  a {
    text-decoration: none;
    color: ${color.black};
    font-size: ${fontSize.h4};
    font-weight: ${fontWeight.light};
  }
  &:hover {
    background-color: ${color.greyPale};
  }
`;

const UserMenuItem = ({ link, label }) => (
  <MenuItem>
    <Link href={`/${link}`}>
      <a>{label}</a>
    </Link>
  </MenuItem>
);
export default UserMenuItem;
