import DefaultLayout from './DefaultLayout';
import CheckoutLayout from './CheckoutLayout';
import PicLayout from './PicLayout';
import NoLayout from './NoLayout';

const layouts = {
  default: DefaultLayout,
  checkout: CheckoutLayout,
  no: NoLayout,
  pic: PicLayout,
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
