import Nav from "./Nav";
import Foot from "./Foot";
import Banner from "../comps/Banner";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Banner />
      <Nav />
      {children}
      <Foot />
    </div>
  );
};

export default Layout;
