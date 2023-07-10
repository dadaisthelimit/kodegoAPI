// generate a generic readme md
// generate a generic readme md
// generate a generic readme md

```
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [auth, setAuth] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getTasks = () => {
    const id = JSON.parse(localStorage.getItem("token")).id;
    axios
      .get(`http://localhost:3001/tasks?id=${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.message === "Unauthorized") {
          setAuth(false);
        } else {
          setAuth(true);
          setTasks(res.data);
        }
      })
      .catch((err) => console.error(err));
  };

  const addTasks = () => {
    const id = JSON.parse(localStorage.getItem("token")).id;
    axios
      .post(`http://localhost:3001/tasks?id=${id}`, { task })
      .then((res) => {
        console.log(res);
        getTasks();
      })
      .catch((err) => console.error(err));
    setTask("");
  };

  const deleteTask = (id) => {
    const deleteConfirm = prompt(
      "Are you sure you want to delete this task? Type yes to continue"
    );
    if (deleteConfirm) {
      axios
        .delete(`http://localhost:3001/tasks/${id}`)
        .then((res) => {
          console.log(res);
          getTasks();
        })
        .catch((err) => console.error(err));
    }
  };

  const completeTask = (id) => {
    axios
      .patch(`http://localhost:3001/tasks/${id}`, { completed: true })
      .then((res) => {
        console.log(res);
        getTasks();
      })
      .catch((err) => console.error(err));
  };

  const pendingTask = (id) => {
    axios
      .patch(`http://localhost:3001/tasks/${id}`, { completed: false })
      .then((res) => {
        console.log(res);
        getTasks();
      })
      .catch((err) => console.error(err));
  };

  const login = () => {
    axios
      .post("http://localhost:3001/login", { username, password })
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          getTasks();
        } else {
          setAuth(false);
        }
      });
  }


  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Login</h1>
        <input type="text" placeholder="Enter username" onChange={(event) => setUsername(event.target.value)} />
        <input type="password" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
        <button onClick={() => login()}>Login</button>
      </div>

      <h1>Tasks</h1>
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <button onClick={() => addTasks()}>Add Tasks</button>
      {auth ? (
        <ul>
          {tasks.map((task) => (
            <div>
              <li key={task.id}>
                {task.task} - {task.completed ? "Completed" : "Pending"}
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </li>
              {task.completed ? null : (
                <button onClick={() => completeTask(task.id)}>
                  Set As Complete
                </button>
              )}
              {task.completed ? (
                <button onClick={() => pendingTask(task.id)}>
                  Set As Pending
                </button>
              ) : null}
            </div>
          ))}
        </ul>
      ) : (
        <h1>Unauthorized</h1>
      )}
    </div>
  );
}

export default App;

```