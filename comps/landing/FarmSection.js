// TODO implement far more interesting styling

import styled from 'styled-components';
import { color } from '../../theme/Variables';
import Heading from '../Heading';
import { LandingContainer } from './HowItWorksSection';

const FarmContainer = styled(LandingContainer)`
  grid-area: farm;
  padding: 0 5rem;
  background-color: ${color.bluePale};
`;

const FarmSection = () => (
  <FarmContainer>
    <Heading title="Meet the farms!" />
  </FarmContainer>
);

export default FarmSection;
