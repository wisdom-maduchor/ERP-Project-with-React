// src/components/Login/Login.tsx
import React from 'react';
import styles from './Login.module.scss';
import loginImage from '../../assets/Login/pablo-sign-in 1.svg';
import logoImage from '../../assets/Login/Group.svg';

const Login = () => {
  return (
    // <div className={styles.loginContainer}>
    //   <div className={styles.leftPane}>
    //     <img src={logoImage} alt="lendsqr" className={styles.logo} />
    //     <img src={loginImage} alt="Login Visual" className={styles.pbloImage} />
    //   </div>
    //   <div className={styles.rightPane}>
    //     <h2>Welcome!</h2>
    //     <p>Enter details to login.</p>

    //     <form className={styles.form}>
    //       <input type="email" placeholder="Email" required />
    //       <div className={styles.passwordField}>
    //         <input type="password" placeholder="Password" required />
    //         <span className={styles.showText}>SHOW</span>
    //       </div>

    //       <a href="#" className={styles.forgotPassword}>FORGOT PASSWORD?</a>

    //       <button type="submit" className={styles.loginButton}>LOG IN</button>
    //     </form>
    //   </div>
    // </div>
    <div className={styles.loginContainer}>
      <div className={styles.leftSection}>
        <img src={logoImage} alt="lendsqr" className={styles.logoImage} />
        <img src={loginImage} alt="Login Visual" className={styles.loginImage} />
      </div>
      <div className={styles.rightSection}>
        <h2>Welcome!</h2>
        <p className={styles.p}>Enter details to login.</p>

        <div className={styles.Form}>
          <form action="submit">
            <label htmlFor="email"></label>
            <input type="email" id='email' placeholder='Email' />
            <label htmlFor="password"></label>
            <div className={styles.passwordField}>
              <input type="text" id='password' placeholder='password' />
              <span>SHOW</span>
            </div>
            <a href='#'>FORGOT PASSWORD?</a>
            <button>LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
