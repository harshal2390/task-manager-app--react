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
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4"
    >
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />

      <div className="flex gap-3 flex-wrap">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="flex-1 min-w-[120px] border border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="flex-1 min-w-[120px] border border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Study"> Study</option>
          <option value="Work">Work</option>
          <option value="Personal"> Personal</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        + Add Task
      </button>
    </form>
  );
}

export default TaskForm;
