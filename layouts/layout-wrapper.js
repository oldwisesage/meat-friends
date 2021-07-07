import DefaultLayout from './default';
import LandingLayout from './landing';
import AdminLayout from './admin';
import CheckoutLayout from './checkout';
import PicLayout from './pic';
import NoLayout from './no';
import ErrLayout from './err';

const layouts = {
  default: DefaultLayout,
  landing: LandingLayout,
  admin: AdminLayout,
  checkout: CheckoutLayout,
  pic: PicLayout,
  no: NoLayout,
  err: ErrLayout,
};

const LayoutWrapper = (props) => {
  // to get the text value of the assigned layout of each component
  const Layout = layouts[props.children.type.layout];
  // if we have a registered layout render children with said layout
  if (Layout != null) {
    return <Layout {...props}>{props.children}</Layout>;
  }
  // if not render children with fragment
  return <DefaultLayout {...props}>{props.children}</DefaultLayout>;
};

export default LayoutWrapper;
