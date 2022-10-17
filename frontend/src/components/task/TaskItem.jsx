/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { Link } from 'react-router-dom';
import classes from './TaskItem.module.scss';

function TaskItem({ task, deleteTask }) {
  const [isCompleted, setIsCompleted] = useState(task.completed);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckboxClick = async () => {
    try {
      setIsLoading(true);
      await axios.put(`/api/tasks/${task._id}`, {
        completed: !isCompleted,
      });
      setIsCompleted(!isCompleted);
      toast.success('Tarefa atualizada com sucesso!');
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <tr className={classes.task_item}>
      <td className={classes.task_name}>
        <div className={classes.checkbox} role="checkbox" aria-checked onChange={handleCheckboxClick} disabled={isLoading}>
          <input type="checkbox" checked={isCompleted} tabIndex={-1} readOnly disabled={isLoading} />
        </div>
        <p>{task.title}</p>
      </td>
      <td>{isCompleted ? 'Tarefa Completa' : 'Tarefa não realizada'}</td>
      <td>
        <button
          className={classes.deleteBtn}
          type="button"
          onClick={() => deleteTask(task._id)}
        >
          Deletar

        </button>
      </td>
      <Link to="/edit-task">
        <td>
          <button
            className={classes.editBtn}
            type="button"
          >
            Editar

          </button>
        </td>
      </Link>
    </tr>
  );
}

export default TaskItem;
