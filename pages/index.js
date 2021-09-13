import styled from 'styled-components';
// import AnimalsSection from '../comps/landing/AnimalsSection';
// import CallToAction from '../comps/landing/CallToAction';
// import FarmSection from '../comps/landing/FarmSection';
// import HowItWorksSection from '../comps/landing/HowItWorksSection';
// import WhoSection from '../comps/landing/WhoSection';

// const LandingContainer = styled.main`
//   display: grid;
//   overflow-y: visible;
//   overflow-x: hidden;
//   min-height: 50rem;
//   grid-template-areas:
//     'cta'
//     'shop'
//     'how'
//     'who'
//     'farm';
// `;

// const LandingPage = () => (
//   <LandingContainer>
//     <CallToAction />
//     <HowItWorksSection />
//     <AnimalsSection />
//     <WhoSection />
//     <FarmSection />
//   </LandingContainer>
// );

// export default LandingPage;

import PicCollage from '../comps/parking/PicCollage';
import Welcome from '../comps/parking/Welcome';
import { device } from '../theme/Breakpoints';

const WelcomeGrid = styled.div`
  display: grid;
  @media ${device.phone} {
    padding: 5rem 0;
  }
  @media ${device.tablet} {
    padding: 0;
    grid-template-columns: 5fr 6fr;
    height: 100vh;
  }
`;

const WelcomePage = () => (
  <WelcomeGrid>
    <Welcome />
    <PicCollage />
  </WelcomeGrid>
);

WelcomePage.layout = 'no';

export default WelcomePage;
