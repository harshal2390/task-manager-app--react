function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">Smart Task Manager</h1>

        <div className="space-x-4">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
