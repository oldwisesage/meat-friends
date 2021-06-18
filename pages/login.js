import Link from "next/link";
import Login from "../comps/Login";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      {/* <Login />; */}
      <div className={styles.container_login}>
        <div className={styles.text}>
          <h1 className={styles.text_title}>Welcome back!</h1>
          <p className={styles.text_subtitle}>Please sign in here</p>
        </div>
        <div className={styles.form}>
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
              type="password"
              className={styles.form_input}
              placeholder="password"
              id="password"
              required
            />
          </div>
        </div>
        <div className={styles.forgot}>
          <Link href="/">
            <a className={styles.forgot_text}>Forgot your password?</a>
          </Link>
        </div>
        <div className={styles.submit}>
          <button className={styles.submit_btn}>Sign in</button>
        </div>
        <div className={styles.register}>
          <p className={styles.register_text}>
            <span>
              <Link href="/register">
                <a className={styles.register_link}>Create new account</a>
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
