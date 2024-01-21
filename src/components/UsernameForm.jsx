// src/components/UsernameForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUsername } from '../utils/redux/slices/userSlice';

const UsernameForm = () => {
  const dispatch = useDispatch();
  const [usernames, setUsernames] = useState('');

  const handleSetUsername = () => {
    dispatch(setUsername(usernames));
    setUsernames("")
  };

  return (
    <div>
      <input
        type="text"
        value={usernames}
        onChange={(e) => setUsernames(e.target.value)}
      />
      <button onClick={handleSetUsername}>Set Username</button>
    </div>
  );
};

export default UsernameForm;
