import axios from 'axios';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Navbar.module.scss';

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const { data } = await axios.get('/api/users/me');
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get('/api/auth/logout');
      setUser(null);
      toast.success('Logout feito com sucesso!');
      navigate('/auth');
    } catch (err) {
      console.log(err);
    }
  };

  if (!user) return null;

  return (
    <header>
      <div className={classes.userInfo}>
        <div>
          <h1 className={classes.name}>{user?.name}</h1>
          <h1 className={classes.email}>{user?.email}</h1>
          <h1 className={classes.name}>{user?.address}</h1>
          <Link to="/edit-profile" className={classes.editBtn}>Editar</Link>
        </div>
      </div>
      <nav>
        <button type="button" className={classes.logout} onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
}

export default Navbar;
