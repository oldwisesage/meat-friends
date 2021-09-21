import styled from 'styled-components';
import { useState } from 'react';
// import CallToAction from '../comps/landing/CallToAction';
// import HowItWorksSection from '../comps/landing/HowItWorksSection';
// import WhatSection from '../comps/landing/What';
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

// const LandingContainer = styled.main`
//   display: grid;
//   overflow-y: visible;
//   overflow-x: hidden;
//   min-height: 50rem;
//   grid-template-areas:
//     'cta'
//     'what'
//     'animal'
//     'cooking';
// `;

const parkingPage = true;

const LandingPage = () => {
  const [parking, setParking] = useState(parkingPage);
  return (
    <WelcomeGrid>
      <Welcome />
      <PicCollage />
    </WelcomeGrid>
    // <>
    //   {parking ? (
    //   ) : (
    //     <LandingContainer>
    //       <CallToAction />
    //       <WhatSection />
    //     </LandingContainer>
    //   )}
    // </>
  );
};

LandingPage.layout = 'no';

export default LandingPage;
