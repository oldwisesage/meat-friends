import styled from 'styled-components';
import { device } from '../../theme/Breakpoints';
import { color, fontSize, fontWeight } from '../../theme/Variables';
import WelcomeForm from './WelcomeForm';

const WelcomeSection = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;

const WelcomeContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  @media ${device.phone} {
    padding: 2rem;
    width: 100%;
  }
  @media ${device.tablet} {
    width: 450px;
  }
`;

const Hello = styled.h1`
  font-weight: ${fontWeight.mid};
  @media ${device.phone} {
    font-size: ${fontSize.h2};
  }
  @media ${device.tablet} {
    font-size: ${fontSize.h1};
  }
`;

const Intro = styled.h3`
  font-weight: ${fontWeight.mid};
  font-size: ${fontSize.h2};
  @media ${device.phone} {
    width: 250px;
  }
  @media ${device.tablet} {
    width: 100%;
  }
`;

const Logo = styled.span`
  font-weight: 900;
  letter-spacing: -1px;
  font-size: ${fontSize.h2};
`;

const Mission = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  p {
    @media ${device.phone} {
      font-size: ${fontSize.bigbody};
      font-weight: ${fontWeight.light};
    }
    @media ${device.tablet} {
      font-size: ${fontSize.h4};
    }
  }
`;

const Welcome = () => (
  <WelcomeSection>
    <WelcomeContainer>
      <Hello>
        Do you like meat? <br />
        Yeah, us too.
      </Hello>
      <Intro>
        Introducing <Logo>meat friends</Logo>
      </Intro>
      <Mission>
        <p>We are your friendly neighborhood, magic internet butcher.</p>
        <p>
          Our aim is to bring healthy, delicious meats from local farms right to
          you doorstep.
        </p>
      </Mission>
      <WelcomeForm />
    </WelcomeContainer>
  </WelcomeSection>
);

export default Welcome;
