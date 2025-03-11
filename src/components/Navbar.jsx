import React, { useState } from "react";
import {
  FaUserCircle,
  FaSignOutAlt,
  FaTasks,
  FaCheckDouble,
} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

function Navbar({ user, handleLogout, showYourTodos, showCompletedTodos }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <nav className="bg-cyan-700 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Task Manager</div>

        <div className="flex space-x-4">
          <button
            onClick={showYourTodos}
            className="text-white hover:bg-cyan-600 px-3 py-2 rounded-md flex items-center transition-colors"
          >
            <FaTasks className="mr-2" /> Your Todos
          </button>
          <button
            onClick={showCompletedTodos}
            className="text-white hover:bg-cyan-600 px-3 py-2 rounded-md flex items-center transition-colors"
          >
            <FaCheckDouble className="mr-2" /> Completed
          </button>

          {user && (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-white hover:bg-cyan-600 px-3 py-2 rounded-md transition-colors"
              >
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-6 h-6 rounded-full mr-2"
                  />
                ) : (
                  <FaUserCircle className="w-6 h-6 mr-2" />
                )}
                {user.displayName || user.email}
                <IoMdArrowDropdown className="ml-1" />
              </button>

              {isDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={handleClickOutside}
                  ></div>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                    <div className="py-1">
                      <button
                        onClick={handleLogout}
                        className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors flex items-center"
                      >
                        <FaSignOutAlt className="mr-2" /> Sign out
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
