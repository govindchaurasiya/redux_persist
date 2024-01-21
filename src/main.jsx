import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AddTask from "./components/AddTask.jsx";
import TaskList from "./components/TaskList.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./utils/redux/store.js";
import UsernameForm from "./components/UsernameForm.jsx";
import UserList from "./components/UserList.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <h1>Task Manager</h1>
          <AddTask />
          <TaskList />
          <UsernameForm />
          <UserList />
        </div>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
