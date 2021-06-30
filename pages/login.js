import Link from 'next/link';
import Login from '../comps/Login';
import styles from './login.module.scss';

export default function LoginPage() {
  LoginPage.layout = 'pic';
  return (
    <div className={styles.container}>
      <Login />
    </div>
  );
}
LoginPage.layout = 'pic';
