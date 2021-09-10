import styled from 'styled-components';
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
