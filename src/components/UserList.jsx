// src/components/UserList.js

import React from "react";
import { useSelector } from "react-redux";

const UserList = () => {
  const usernames = useSelector((state) => state?.user?.username);
  console.log("usernames", usernames);

  return (
    <div>
      <h1>User List</h1>
      <h2>{usernames}</h2>
      {usernames && (
        <p>
          This user name is not persisting if refresh the page username will
          delete from redux store.
        </p>
      )}
    </div>
  );
};

export default UserList;
