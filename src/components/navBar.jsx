import React from "react";

import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="h-fit flex w-screen fixed top-0 left-0">
      <nav className="flex justify-between items-center w-full p-4 bg-gray-800 text-white border-b border-gray-700">
        <ul className="flex space-x-4">
          <li className="cursor-pointer" onClick={() => navigate("/")}>Login</li>
          <li className="cursor-pointer" onClick={() => navigate("/dashboard")}>Dashboard</li>
          <li className="cursor-pointer" onClick={() => navigate("/register")}>Register</li>
        </ul>
      </nav>
    </div>
  );
}
