import Heading from '../Heading';
import AddNewButton from './AddNewButton';
import styles from './Address.module.scss';
import AddressBtn from './AddressBtn';

// TODO add crud ability with this address situation

export default function Address({ active }) {
  console.log(active);
  if (!active) return null;
  return (
    <div className={styles.container}>
      <Heading title="Addresses" />
      {/* COMP AddressBtn */}
      <AddressBtn />
      <AddNewButton text="address" />
    </div>
  );
}
