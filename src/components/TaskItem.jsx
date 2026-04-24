function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <li className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
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
  );
}

export default TaskItem;
