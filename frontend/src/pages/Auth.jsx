import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import Layout from '../components/Layout';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import classes from './Auth.module.scss';
import useAuth from '../hooks/useAuth';

function Auth() {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate('/');
    }
  }, [auth, navigate]);

  return (
    <Layout>
      <h1 className={classes.form_container}>Bem vindo ao Ativy To-Do-List!</h1>
      <Player
        autoplay
        loop
        src="https://assets3.lottiefiles.com/packages/lf20_mf5j5kua.json"
        style={{ height: '250px', width: '250px' }}
      />
      <div className={classes.form_container}>
        <Login />
        <Register />
      </div>
    </Layout>
  );
}

export default Auth;
