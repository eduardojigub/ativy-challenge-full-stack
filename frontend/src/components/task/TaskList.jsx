/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import TaskItem from './TaskItem';
import classes from './TaskList.module.scss';

function TaskList() {
  const [taskList, setTasklist] = useState([]);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newTask, setNewTask] = useState('');

  const getTasks = async () => {
    try {
      const { data } = await axios.get('/api/tasks/myTasks');
      setTasklist(
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
      );
    } catch (err) {
      console.log(err);
    }
  };

  const addNewButtonClick = () => {
    setIsAddingNew(!isAddingNew);
  };

  useEffect(() => {
    getTasks();
  }, []);

  const deleteTask = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      toast.success('Tarefa deletada com sucesso');
      setTasklist(taskList.filter((task) => task._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const updateTask = async (id) => {
    try {
      await axios.put(`/api/tasks/${id}`);
      toast.success('Tarefa atualizada com sucesso!');
      setTasklist(taskList.filter((task) => task._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const addNewTask = async (e) => {
    e.preventDefault();
    if (newTask.length <= 0) {
      toast.error('Task está vazia');
    }
    try {
      const { data } = await axios.post('/api/tasks', {
        title: newTask,
      });
      toast.success('Nova Tarefa Criada!');
      setTasklist([{ ...data }, ...taskList]);
      setNewTask('');
      setIsAddingNew(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className={classes.topBar}>
        <button type="button" className={classes.addNew} onClick={addNewButtonClick}>Adicionar Tarefa</button>
      </div>
      {isAddingNew && (
        <form className={classes.addNewForm} onSubmit={addNewTask}>
          <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Digite sua tarefa" />
          <button type="submit">Adicionar</button>
        </form>
      )}
      {taskList.length > 0 ? (
        <table className={classes.taskList_table}>
          <tbody>
            {taskList.map((task) => (
              <TaskItem
                key={task._id}
                task={task}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            ))}
          </tbody>
        </table>
      ) : 'Nenhuma tarefa encontrada' }
    </div>
  );
}

export default TaskList;
