import CreateCut from '../comps/crud/CreateCut';
import styles from './add.module.scss';

export default function AddPage() {
  return (
    <div className={styles.container}>
      <CreateCut />
    </div>
  );
}
