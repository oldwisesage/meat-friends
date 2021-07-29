import styled from 'styled-components';
import Nav from '../comps/nav/Nav';
import Foot from '../comps/nav/Foot';

const PicBackground = styled.div``;

const PicLayout = ({ children }) => (
  <PicBackground>
    <Nav />
    {children}
    <Foot />
  </PicBackground>
);

export default PicLayout;
