/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import axios from 'axios';
import toast from 'react-hot-toast';
import classes from './EditTaskForm.module.scss';

function EditTaskForm() {
  const location = useLocation();
  const locationData = location.state?.data;
  const [task, setTask] = useState({ title: '' });

  useEffect(() => {
    (
      async () => {
        try {
          const { data } = await await axios.get(`/api/tasks/${locationData.id}`);
          setTask(data);
        } catch (err) {
          console.log(err);
        }
      }
    )();
  }, []);

  const updateUserInfo = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const updateTask = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/api/tasks/${locationData.id}`, task);
      console.log(res);
      toast.success('Perfil atualizado com sucesso!');
      setTask(res.data);
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
        <h1>Editar Tarefa</h1>
        <form className={classes.editForm} onSubmit={updateTask}>
          <label htmlFor="title">
            Task
            <input type="text" name="title" placeholder="Atualize sua tarefa" value={task.title} onChange={updateUserInfo} required />
          </label>
          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
}

export default EditTaskForm;
