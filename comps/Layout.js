import Nav from "./Nav";
import Foot from "./Foot";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Nav />
      {children}
      <Foot />
    </div>
  );
};

export default Layout;
