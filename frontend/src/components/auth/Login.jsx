import React from 'react';
import classes from './AuthForm.module.scss';

function Login() {
  return (
    <div className={classes.register}>
      <h1 className={classes.title}>
        Login
      </h1>
      <form className={classes.authForm}>
        <label htmlFor="email">
          Email
          <input type="email" name="email" placeholder="Digite seu e-mail" required />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" placeholder="Digite sua senha" required />
        </label>
      </form>
    </div>
  );
}

export default Login;
