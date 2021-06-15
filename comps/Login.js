import styles from "../styles/comps/Login.module.scss";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.text__title}>Hi! Please login</h1>
          <p className={styles.text__subtitle}>
            Please enter your username & password
          </p>
        </div>
        <div className={styles.form}>
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
              type="password"
              className={styles.form__input}
              placeholder="password"
              id="password"
              required
            />
            <label htmlFor="password" className={styles.form__label}></label>
          </div>
        </div>
        <div className={styles.forgot}>
          <Link href="/">
            <a className={styles.forgot__text}>Forgot your password?</a>
          </Link>
        </div>
        <div className={styles.submit}>
          <button className={styles.submit__btn}>Sign in</button>
        </div>
        <div className={styles.register}>
          <p className={styles.register__text}>
            <span>
              <Link href="/register">
                <a className={styles.register__link}>Create new account</a>
              </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
