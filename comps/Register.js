import styles from "../styles/Register.module.scss";
import Link from "next/link";

const Register = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.text_title}>New here?</h1>
          <p className={styles.text_subtitle}>Create an account below</p>
        </div>
        <div className={styles.form}>
          <div className={styles.form__group}>
            <input
              type="first-name"
              className={styles.form__input}
              placeholder="first name"
              id="first-name"
              required
            />
            <label htmlFor="first-name" className={styles.form__label}></label>
          </div>
          <div className={styles.form__group}>
            <input
              type="last-name"
              className={styles.form__input}
              placeholder="last name"
              id="last-name"
              required
            />
            <label htmlFor="last-name" className={styles.form__label}></label>
          </div>
          <div className={styles.form__group}>
            <input
              type="user"
              className={styles.form__input}
              placeholder="username"
              id="username"
              required
            />
            <label htmlFor="user" className={styles.form__label}></label>
          </div>
          <div className={styles.form__group}>
            <input
              type="new-password"
              className={styles.form__input}
              placeholder="password"
              id="new-password"
              required
            />
            <label
              htmlFor="new-password"
              className={styles.form__label}
            ></label>
          </div>
          <div className={styles.form__group}>
            <input
              type="confirm-pwd"
              className={styles.form__input}
              placeholder="confirm password"
              id="confirm-pwd"
              required
            />
            <label htmlFor="confirm-pwd" className={styles.form__label}></label>
          </div>
          <div className={styles.form__group_check}>
            <input
              type="checkbox"
              className={styles.form__input_check}
              id="signup"
            />
            <label htmlFor="signup" className={styles.form__label_check}>
              Sign up for updates!
            </label>
          </div>
        </div>

        <div className={styles.create}>
          <button className={styles.create__btn}>Create account</button>
        </div>
      </div>
    </>
  );
};

export default Register;
