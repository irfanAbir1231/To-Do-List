import React from 'react'

// Navbar component definition
function Navbar({ showYourTodos, showCompletedTodos }) {
  return (
    // Navigation bar with full width, flex layout, and styling
    <nav className='w-full flex justify-between bg-cyan-700 py-4 px-6 text-white shadow-lg'>
      {/* Logo section */}
      <div className="logo">
        <span className='font-bold text-3xl'>ITo-Do</span>
      </div>
      {/* Navigation links */}
      <ul className='flex gap-8'>
        <li className='font-bold text-xl hover:text-gray-300 cursor-pointer transition-all duration-300'>
          <a onClick={showYourTodos}>Your Tasks</a>
        </li>
        <li className='font-bold text-xl hover:text-gray-300 cursor-pointer transition-all duration-300'>
          <a onClick={showCompletedTodos}>Completed Tasks</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
