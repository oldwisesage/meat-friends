import styled from 'styled-components';
import { color, fontSize, fontWeight } from '../theme/Variables';
import Logo from './Logo';

const Slogan = styled.div`
  font-weight: ${fontWeight.light};
  font-size: ${fontSize.body};
  color: ${color.greyPale};
`;

const FootLogo = ({ ...props }) => (
  <Logo color="white">
    <Slogan>{props.slogan}</Slogan>
  </Logo>
);
export default FootLogo;
