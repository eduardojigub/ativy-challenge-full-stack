/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import toast from 'react-hot-toast';
import classes from './EditTaskForm.module.scss';

function EditTaskForm() {
  const [task, setTask] = useState({
    title: '',
  });
  useEffect(() => {
    (
      async () => {
        try {
          const { data } = await axios.get(`/api/tasks/${task._id}`);
          console.log(data);
          setTask(data);
        } catch (err) {
          console.log(err);
        }
      }
    )();
  }, [task._id]);

  // const updateUserInfo = (e) => {
  //   setUser({
  //     ...user,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const updateProfile = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.put('/api/users/me', user);
  //     toast.success('Perfil atualizado com sucesso!');
  //     setTask(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div>
      <Link to="/" className={classes.backBtn}>
        <BsArrowLeftShort />
        Home
      </Link>
      <div>
        <h1>Editar Perfil</h1>
        <form className={classes.editForm}>
          <label htmlFor="name">
            Task
            <input type="text" name="name" placeholder="Atualize sua tarefa" required value={task.title} />
          </label>
          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
}

export default EditTaskForm;
