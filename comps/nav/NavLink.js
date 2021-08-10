import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { fontSize, color } from '../../theme/Variables';

const NavLinkContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  padding-top: 0.75rem;
`;

const LinkText = styled.a`
  color: ${color.black};
  font-size: ${fontSize.h4};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${color.greyDark};
  }
`;

const NavLink = ({ link, text }) => (
  <NavLinkContainer>
    <Link href={`/${link}`}>
      <LinkText>{text}</LinkText>
    </Link>
  </NavLinkContainer>
);

NavLink.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavLink;
