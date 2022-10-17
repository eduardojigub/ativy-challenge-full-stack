import React, { useEffect, useState } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import classes from './EditProfileForm.module.scss';

function EditProfileForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    address: '',
  });
  useEffect(() => {
    (
      async () => {
        try {
          const { data } = await axios.get('/api/users/me');
          setUser(data);
        } catch (err) {
          console.log(err);
        }
      }
    )();
  }, []);

  const updateUserInfo = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put('/api/users/me', user);
      toast.success('Perfil atualizado com sucesso!');
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Link to="/" className={classes.backBtn}>
        <BsArrowLeftShort />
        Home
      </Link>
      <div>
        <h1>Editar Perfil</h1>
        <form className={classes.editForm} onSubmit={updateProfile}>
          <label htmlFor="name">
            Nome
            <input type="text" name="name" placeholder="Nome Completo" required value={user.name} onChange={updateUserInfo} />
          </label>
          <label htmlFor="email">
            Email
            <input type="email" name="email" placeholder="Email" required value={user.email} onChange={updateUserInfo} />
          </label>
          <label htmlFor="address">
            Endereço
            <input type="text" name="address" placeholder="Endereço" required value={user.address} onChange={updateUserInfo} />
          </label>
          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
}

export default EditProfileForm;
