import styles from './FormInput.module.scss';

const FormInput = () => (
  <div className={styles.form_group}>
    <input
      type="user"
      className={styles.form_input}
      placeholder="username"
      id="username"
      required
    />
  </div>
);

export default FormInput;
