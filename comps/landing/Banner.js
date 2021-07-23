import Link from 'next/link';
import styled from 'styled-components';
import { color, fontSize } from '../../theme/Variables';

const BannerContainer = styled.div`
  width: 100vw;
  max-height: 5rem;
  background: $grey-pale;
  display: grid;
  align-content: center;
  justify-content: center;
`;
const LinkText = styled.a`
  font-size: ${fontSize.h4};
  text-decoration: none;
  color: ${color.greyDark};
  &:hover {
    color: ${color.blueMid};
  }
`;

const Banner = () => (
  <BannerContainer>
    <Link href="/">
      <LinkText>Some text that would be exciting</LinkText>
    </Link>
  </BannerContainer>
);

export default Banner;
