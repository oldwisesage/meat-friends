import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

UserMenuItem.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default UserMenuItem;
