import styled from 'styled-components';
import { borderRadius, boxShadow, color } from '../../theme/Variables';
import Heading from '../Heading';
import Step from './Step';

export const LandingContainer = styled.div`
  min-width: 100vw;
  min-height: 50rem;
  display: grid;
`;

const HowContainer = styled(LandingContainer)`
  grid-area: how;
`;
const HowInnerContainer = styled.div`
  margin: 2.5rem;
  padding: 2.5rem;
  backdrop-filter: blur(25px) saturate(200%);
  -webkit-backdrop-filter: blur(25px) saturate(200%);
  background-color: rgba(224, 224, 224, 0.48);
  border-radius: ${borderRadius.default};
  box-shadow: ${boxShadow.idle};
  display: grid;
  grid-template-rows: auto 1fr;
`;
// const StepTwo = styled(Step)``;
// const StepThree = styled(Step)``;

const HowItWorksSection = () => (
  <HowContainer>
    <HowInnerContainer>
      <Heading
        title="How it works"
        subtitle="A simple way to get the best quality meat"
      />
      <Step
        whatStep="one"
        what="Hunger for a world of healthier, tastier, happier meat!"
      />
    </HowInnerContainer>
  </HowContainer>
);

export default HowItWorksSection;
