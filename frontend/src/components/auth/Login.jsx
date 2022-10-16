import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import classes from './AuthForm.module.scss';

function Login() {
  const navigate = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await axios.post('/api/auth/login', { email, password });
      navigate('/');
      toast.success('Login feito com sucesso!');
    } catch (err) {
      console.log(err);
      toast.error('Ops! Login falhou!');
    }
  };

  return (
    <div className={classes.register}>
      <h1 className={classes.title}>
        Login
      </h1>
      <form className={classes.authForm} onSubmit={login}>
        <label htmlFor="email">
          Email
          <input type="email" name="email" placeholder="Digite seu e-mail" required />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" placeholder="Digite sua senha" required />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
