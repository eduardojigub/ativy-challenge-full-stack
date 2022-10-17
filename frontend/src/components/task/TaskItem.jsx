/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import classes from './TaskItem.module.scss';

function TaskItem({ task, deleteTask }) {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  return (
    <tr className={classes.task_item}>
      <td className={classes.task_name}>
        <div className={classes.checkbox}>
          <input type="checkbox" checked={isCompleted} tabIndex={-1} readOnly />
        </div>
        <p>{task.title}</p>
      </td>
      <td>{isCompleted ? 'Tarefa Completa' : 'Tarefa não realizada'}</td>
      <td>
        <button className={classes.deleteBtn} type="button" onClick={() => deleteTask(task._id)}>Deletar</button>
      </td>
    </tr>
  );
}

export default TaskItem;
