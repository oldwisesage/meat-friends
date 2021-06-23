import styles from "./register.module.scss";
import FormInput from "../comps/FormInput";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      {/* <Register /> */}
      <div className={styles.container_register}>
        <div className={styles.text}>
          <h1 className={styles.text_title}>New here?</h1>
          <p className={styles.text_subtitle}>Create an account below</p>
        </div>
        <div className={styles.form}>
          <div className={styles.form_group_top}>
            <input
              type="first-name"
              className={styles.form_input}
              placeholder="first name"
              id="first-name"
              required
            />
            <input
              type="last-name"
              className={styles.form_input}
              placeholder="last name"
              id="last-name"
              required
            />
          </div>
          <div className={styles.form_group}>
            <input
              type="user"
              className={styles.form_input}
              placeholder="username"
              id="username"
              required
            />
          </div>
          <div className={styles.form_group}>
            <input
              type="new-password"
              className={styles.form_input}
              placeholder="password"
              id="new-password"
              required
            />
          </div>
          <div className={styles.form_group}>
            <input
              type="confirm-pwd"
              className={styles.form_input}
              placeholder="confirm password"
              id="confirm-pwd"
              required
            />
          </div>
          <div className={styles.form_check}>
            <input
              type="checkbox"
              className={styles.form_check_input}
              id="signup"
            />
            <label htmlFor="signup" className={styles.form_check_label}>
              Sign up for updates!
            </label>
          </div>
        </div>

        <div className={styles.create}>
          <button className={styles.create_btn}>Create account</button>
        </div>
      </div>
    </div>
  );
};

RegisterPage.layout = "pic";

export default RegisterPage;
