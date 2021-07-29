import Link from 'next/link';
import styled from 'styled-components';
import { color, fontSize, fontWeight } from '../../theme/Variables';
import FootLogo from '../FootLogo';
import Social from './Social';

const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: stretch;
  grid-gap: 5rem;
  background: ${color.greyDark};
  min-height: 15rem;
`;

const LeftContainer = styled.div`
  display: grid;
  justify-content: center;
  height: 100%;
`;

const Copyright = styled.div`
  display: grid;
  height: 100%;
  font-weight: ${fontWeight.light};
  p {
    color: ${color.white};
    font-size: ${fontSize.body};
    align-self: end;
  }
  a {
    text-decoration: none;
    color: ${color.white};
    font-weight: ${fontWeight.bold};
    &:hover {
      color: ${color.greyPale};
    }
  }
`;
const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: -2rem;
`;

const RightContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  justify-items: center;
  align-items: center;
  padding-top: 1rem;
`;

const SitemapCol = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-rows: 3rem repeat(3, 2rem);
`;

const SitemapTitle = styled.h4`
  font-size: ${fontSize.body};
  font-weight: ${fontWeight.heavy};
  color: ${color.white};
`;

const SitemapLink = styled.a`
  color: red;
  text-decoration: none;
  color: ${color.white};
  font-size: ${fontSize.caption};
  &:hover {
    color: ${color.greyPale};
  }
`;

const Foot = () => (
  <FooterContainer>
    <LeftContainer>
      <Social />
      <Copyright>
        <p>
          ©{' '}
          <Link href="/">
            <a>Meat Friends</a>
          </Link>{' '}
          2020. All rights reserved
        </p>
      </Copyright>
    </LeftContainer>
    <CenterContainer>
      <FootLogo slogan="some cool slogan here" />
    </CenterContainer>
    <RightContainer>
      <SitemapCol>
        <SitemapTitle>Help</SitemapTitle>
        <Link href="/">
          <SitemapLink>Contact us</SitemapLink>
        </Link>
        <Link href="/">
          <SitemapLink>FAQ</SitemapLink>
        </Link>
      </SitemapCol>
      <SitemapCol>
        <SitemapTitle>Company</SitemapTitle>
        <Link href="/">
          <SitemapLink>About</SitemapLink>
        </Link>
        <Link href="/">
          <SitemapLink>Careers</SitemapLink>
        </Link>
        <Link href="/">
          <SitemapLink>Our Process</SitemapLink>
        </Link>
      </SitemapCol>
      <SitemapCol>
        <SitemapTitle>Legal</SitemapTitle>
        <Link href="/">
          <SitemapLink>Terms</SitemapLink>
        </Link>
        <Link href="/">
          <SitemapLink>Privacy</SitemapLink>
        </Link>
      </SitemapCol>
    </RightContainer>
  </FooterContainer>
);

export default Foot;
