// TODO implement far more interesting styling

import styled from 'styled-components';
import { color } from '../../theme/Variables';
import Heading from '../Heading';
import { LandingContainer } from './HowItWorksSection';

const WhoContainer = styled(LandingContainer)`
  grid-area: who;
  padding: 0 5rem;
`;
const WhoHeading = styled(Heading)`
  color: ${color.white};
`;

const Who = () => (
  <WhoContainer>
    <WhoHeading title="Who is meat friends?" />
  </WhoContainer>
);

export default Who;
