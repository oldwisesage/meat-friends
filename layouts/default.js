import Nav from '../comps/nav/Nav';
import Foot from '../comps/nav/Foot';

const DefaultLayout = ({ children }) => (
  <>
    <Nav />
    {children}
    <Foot />
  </>
);

export default DefaultLayout;
