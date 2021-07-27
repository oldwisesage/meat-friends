import styled from 'styled-components';
import AnimalsSection from '../comps/landing/AnimalsSection';
import CallToAction from '../comps/landing/CallToAction';
import FarmSection from '../comps/landing/FarmSection';
import HowItWorksSection from '../comps/landing/HowItWorksSection';
import WhoSection from '../comps/landing/WhoSection';

const LandingContainer = styled.main`
  display: grid;
  overflow-y: visible;
  overflow-x: hidden;
  min-height: 50rem;
  grid-template-areas:
    'cta'
    'shop'
    'how'
    'who'
    'farm';
`;

const LandingPage = () => (
  <LandingContainer>
    <CallToAction />
    <HowItWorksSection />
    <AnimalsSection />
    <WhoSection />
    <FarmSection />
  </LandingContainer>
);

export default LandingPage;
