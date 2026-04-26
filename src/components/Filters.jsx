function Filters({
  search,
  setSearch,
  filterPriority,
  setFilterPriority,
  filterCategory,
  setFilterCategory,
}) {
  return (
    <div className="max-w-2xl mx-auto mt-6 bg-white shadow-lg rounded-xl p-4 flex flex-col md:flex-row gap-3 items-center">
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select
        value={filterPriority}
        onChange={(e) => setFilterPriority(e.target.value)}
        className="flex-1 w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="All">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        className="flex-1 w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="All">All Categories</option>
        <option value="Study">Study</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>

      <button
        onClick={() => {
          setSearch("");
          setFilterPriority("All");
          setFilterCategory("All");
        }}
        className="w-full md:w-auto bg-gray-200 hover:bg-gray-300 px-4 py-2.5 rounded-lg text-sm font-medium transition"
      >
        Reset
      </button>
    </div>
  );
}

export default Filters;
