import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color, fontSize } from '../theme/Variables';

const LogoContainer = styled.div`
  text-align: center;
  color: ${(props) =>
    props.color === 'white' ? `${color.greyPale}` : `${color.black}`};
`;

const LogoText = styled.h3`
  font-weight: 900;
  font-size: ${fontSize.h2};
  letter-spacing: -1px;
  &:hover {
    color: ${color.white};
  }
`;

const Logo = ({ children, color }) => (
  <Link href="/">
    <LogoContainer color={color}>
      <LogoText>meat friends</LogoText>
      {children}
    </LogoContainer>
  </Link>
);

Logo.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Logo;
