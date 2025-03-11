import React from "react";
import { MdAddTask, MdOutlineUpdate } from "react-icons/md";

function TodoForm({ todo, setTodo, handleAdd, isEditing }) {
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center mb-5 justify-center"
    >
      <input
        onChange={handleChange}
        value={todo}
        type="text"
        className="border-2 border-gray-300 rounded-lg p-2 w-3/4 focus:outline-none focus:border-cyan-700 transition-all"
        placeholder="Add a new todo"
      />
      <button
        type="submit"
        className="bg-cyan-700 text-white p-2 rounded-lg hover:bg-blue-600 px-4 font-bold ml-2 transition-all flex items-center"
      >
        {isEditing ? (
          <MdOutlineUpdate className="mr-2" />
        ) : (
          <MdAddTask className="mr-2" />
        )}
        {isEditing ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default TodoForm;
