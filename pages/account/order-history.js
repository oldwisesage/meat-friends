import { useState } from 'react';
import OrderHistory from '../../comps/account/OrderHistory';
import Address from '../../comps/account/Address';
import styles from './account.module.scss';
import useUser from '../../comps/user/User';
// import AccountNav from '../../comps/account/AccountNav';
import Heading from '../../comps/Heading';
import PaymentMethods from '../../comps/account/PaymentMethods';
import AccountNavBtn from '../../comps/account/AccoutNavBtn';

export default function Account() {
  const user = useUser();
  const [state, setState] = useState([
    { comp: 'Order History', isActive: true, link: 'order-history' },
    { comp: 'Personal Information', isActive: false, link: 'info' },
    { comp: 'Addresses', isActive: false, link: 'address' },
    { comp: 'Payment Methods', isActive: false, link: 'payment-method' },
    { comp: 'Settings', isActive: false, link: 'settings' },
  ]);

  if (!user) return null;
  console.log(user);
  return (
    <div className={styles.container}>
      <div className={styles.container_acc}>
        <Heading title={`Hello ${user.name}!`} subtitle={user.email} />
        <div className={styles.container_nav}>
          <div className={styles.nav}>
            {state.map((accLink, index) => (
              <AccountNavBtn
                comp={accLink.comp}
                key={index}
                active={accLink.isActive}
                link={accLink.link}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.container_comp}>
        {/* COMP some illustration component to render */}
        <OrderHistory id={user.id} active />
        {/* COMP PERSONAL INFORMATION */}
        <Address />
        <PaymentMethods />
        {/* COMP SETTINGS */}
        {/* COMP LOG OUT */}
      </div>
    </div>
  );
}

Account.layout = 'default';