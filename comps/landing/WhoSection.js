// TODO implement far more interesting styling

import styled from 'styled-components';
import Heading from '../Heading';
import { LandingContainer } from './HowItWorksSection';

const WhoContainer = styled(LandingContainer)`
  grid-area: who;
  padding: 0 5rem;
`;

const WhoSection = () => (
  <WhoContainer>
    <Heading title="Who is meat friends?" />
  </WhoContainer>
);

export default WhoSection;
