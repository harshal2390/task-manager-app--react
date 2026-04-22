import { useState } from "react";

function TaskForm({ addTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Low");
  const [category, setCategory] = useState("study");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    addTask(task, priority, category);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Study">Study</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>

      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
