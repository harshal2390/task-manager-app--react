import { useState } from "react";
import TaskForm from "../components/TaskForm";
import Filters from "../components/Filters";
import TaskList from "../components/TaskList";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [filterPriority, setFilterPriority] = useState("All");
  const [filterCategory, setFilterCategory] = useState("All");

  const addTask = (tasktext, priority, category) => {
    const newTask = {
      id: Date.now(),
      text: tasktext,
      completed: false,
      priority,
      category,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.text
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesPriority =
      filterPriority === "All" || task.priority === filterPriority;

    const matchesCategory =
      filterCategory === "All" ||
      task.category.toLowerCase() === filterCategory.toLowerCase();

    return matchesSearch && matchesPriority && matchesCategory;
  });

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-6">
        Smart Task Manager
      </h2>

      <TaskForm addTask={addTask} />

      <Filters
        search={search}
        setSearch={setSearch}
        filterPriority={filterPriority}
        setFilterPriority={setFilterPriority}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />

      <TaskList
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default Home;
