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
    const updatedTask = tasks.filter((task) => task.id !== id);
    setTasks(updatedTask);
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        Welcome to Smart Task Manager
      </h2>

      <TaskForm addTask={addTask} />

      <ul className="mt-8 space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
          >
            <div
              onClick={() => toggleComplete(task.id)}
              className={`flex-1 cursor-pointer select-none ${
                task.completed ? "line-through text-gray-400" : "text-gray-800"
              }`}
            >
              {task.text}
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  task.priority === "High"
                    ? "bg-red-100 text-red-700"
                    : task.priority === "Medium"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-green-100 text-green-700"
                }`}
              >
                {task.priority}
              </span>

              <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 font-medium">
                {task.category}
              </span>

              <button
                onClick={() => deleteTask(task.id)}
                className="text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm font-semibold transition"
              >
                Delete
              </button>
            </div>
          </li>
        ))}

        {tasks.length === 0 && (
          <p className="text-center text-gray-500 mt-6">No tasks yet</p>
        )}
      </ul>
    </div>
  );
}

export default Home;
