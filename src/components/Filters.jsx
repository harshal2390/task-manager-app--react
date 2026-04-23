function Filters({
  search,
  setSearch,
  filterPriority,
  setFilterPriority,
  filterCategory,
  setFilterCategory,
}) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6 flex flex-col md:flex-row gap-4 items-center">
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/3 border border-gray-300 rounded-lg px-4 py-2"
      />

      <select
        value={filterPriority}
        onChange={(e) => setFilterPriority(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2"
      >
        <option value="All">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2"
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
        className="bg-gray-200 px-3 py-2 rounded"
      >
        Reset
      </button>
    </div>
  );
}

export default Filters;
