// src/components/AddTask.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../utils/redux/slices/tasksSlice';

const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim() !== '') {
      dispatch(addTask({ id: Date.now(), text: task }));
      setTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
