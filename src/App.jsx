import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="py-6">
        <Home />
      </main>
    </div>
  );
}

export default App;
