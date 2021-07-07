import styles from './register.module.scss';
import Register from '../comps/user/Register';

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <Register />
    </div>
  );
}

RegisterPage.layout = 'pic';
