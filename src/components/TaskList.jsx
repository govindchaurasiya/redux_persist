// src/components/TaskList.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../utils/redux/slices/tasksSlice';

const TaskList = () => {
  const tasks = useSelector((state) =>state?.tasks?.tasks);
  console.log('tasks', tasks)
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks?.map((task) => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
