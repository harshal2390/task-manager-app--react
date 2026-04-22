import { useState } from "react";
import TaskForm from "../components/TaskForm";

function Home() {
  const [tasks, setTasks] = useState([]);

  const addTask = (tasktext, priority, category) => {
    const newTask = {
      id: Date.now(),
      text: tasktext,
      completed: false,
      priority,
      category,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    console.log("deleting", id);
    const updatedTask = tasks.filter((task) => task.id !== id);
    setTasks(updatedTask);
  };

  const togglecomplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );
    setTasks(updatedTasks);
  };
  return (
    <div>
      <h2>Welcome to Smart Task Manager 🚀</h2>
      <TaskForm addTask={addTask} />

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              onClick={() => togglecomplete(task.id)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              {" "}
              {task.text}
            </span>
            <span
              style={{
                marginRight: "10px",
                fontWeight: "bold",
                color:
                  task.priority === "High"
                    ? "red"
                    : task.priority === "Medium"
                      ? "orange"
                      : "green",
              }}
            >
              {task.priority}
            </span>
            <span>{task.category}</span>
            <button onClick={() => deleteTask(task.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
