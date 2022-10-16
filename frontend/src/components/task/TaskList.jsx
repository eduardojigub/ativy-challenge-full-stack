import axios from 'axios';
import React, { useState, useEffect } from 'react';
import classes from './TaskList.module.scss';

function TaskList() {
  const [tasklist, setTasklist] = useState([]);

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

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <div className={classes.topBar}>
        <button type="button" className={classes.addNew}>Adicionar Tarefa</button>
      </div>
      {tasklist.length > 0 ? (
        <table className={classes.taskList_table}>
          <tbody>
            {tasklist.map((task) => (
              <h1>{task.title}</h1>
            ))}
          </tbody>
        </table>
      ) : 'Nenhuma tarefa encontrada' }
    </div>
  );
}

export default TaskList;
