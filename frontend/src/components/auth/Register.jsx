import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import classes from './AuthForm.module.scss';

function Register() {
  const register = async (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      address: e.target.address.value,
    };
    try {
      await axios.post('/api/auth/register', user);
      toast.success('Registrado com sucesso!');
    } catch (err) {
      console.log(err);
      toast.error('Registro falhou!');
    }
  };
  return (
    <div className={classes.register}>
      <h1 className={classes.title}>Register</h1>
      <form className={classes.authForm} onSubmit={register}>
        <label htmlFor="name">
          Nome
          <input type="text" name="name" placeholder="Nome Completo" required />
        </label>
        <label htmlFor="email">
          Email
          <input type="email" name="email" placeholder="Insira seu e-mail" required />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" placeholder="Digite sua senha" required />
        </label>
        <label htmlFor="address">
          Endereço
          <input type="text" name="address" placeholder="Digite seu endereço" required />
        </label>
        <br />
        <button type="submit">Registro</button>
      </form>
    </div>
  );
}

export default Register;
