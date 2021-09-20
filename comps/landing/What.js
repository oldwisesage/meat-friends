import styled from 'styled-components';
import {
  borderRadius,
  boxShadow,
  color,
  fontSize,
  fontWeight,
} from '../../theme/Variables';
import Heading from '../Heading';
import Step from './Step';

export const LandingContainer = styled.div`
  min-width: 100vw;
  min-height: 50rem;
  display: grid;
`;

const WhatContainer = styled(LandingContainer)`
  grid-area: how;
  background-color: red;
`;

const Piece = styled.div`
  height: 300px;
  background-color: red;
  h1 {
    font-size: ${fontSize.h3};
    font-weight: ${fontWeight.bold};
  }
  p {
    font-size: ${fontSize.h3};
    font-weight: ${fontWeight.bold};
  }
`;

const Discover = styled(Piece)``;
const PerfectSteak = styled(Piece)``;
const Curate = styled(Piece)``;
const Health = styled(Piece)``;

const WhatSection = () => (
  <WhatContainer>
    <Discover>
      <h1>Discover a new cut.</h1>
      <p>
        Part of the fun of cooking. Learn new things. Dont' know how to smoke
        some ribs? Ask us. We practically worship smoked ribs.
      </p>
    </Discover>
    <PerfectSteak>
      <h1>Discover a new cut.</h1>
      <p>
        Part of the fun of cooking. Learn new things. Dont' know how to smoke
        some ribs? Ask us. We practically worship smoked ribs.
      </p>
    </PerfectSteak>
    <Curate>
      <h1>Discover a new cut.</h1>
      <p>
        Part of the fun of cooking. Learn new things. Dont' know how to smoke
        some ribs? Ask us. We practically worship smoked ribs.
      </p>
    </Curate>
    <Health>
      <h1>Discover a new cut.</h1>
      <p>
        Part of the fun of cooking. Learn new things. Dont' know how to smoke
        some ribs? Ask us. We practically worship smoked ribs.
      </p>
    </Health>
  </WhatContainer>
);

export default WhatSection;
