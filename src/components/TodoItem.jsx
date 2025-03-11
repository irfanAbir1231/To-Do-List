import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

function TodoItem({
  todo,
  handleCheckBox,
  handleEdit,
  handleDelete,
  completed,
}) {
  return (
    <div
      id={todo.id}
      className="todo flex justify-between items-center bg-gray-100 p-3 my-3 rounded-lg shadow-md transition-all hover:shadow-lg"
    >
      <div className="flex items-center">
        <input
          name={todo.id}
          onChange={handleCheckBox}
          type="checkbox"
          checked={todo.iscompleted}
          disabled={completed}
          className="w-6 h-6 border-2 border-gray-400 rounded-lg accent-cyan-700"
        />
        <div
          className={`ml-3 font-semibold text-lg ${
            todo.iscompleted ? "line-through text-cyan-700" : "text-gray-800"
          }`}
        >
          {todo.todo}
        </div>
      </div>
      <div className="buttons flex space-x-2">
        {handleEdit && (
          <button
            onClick={() => handleEdit(todo.id)}
            className="bg-cyan-700 text-white p-2 rounded-lg hover:bg-blue-600 px-4 font-bold transition-all flex items-center"
          >
            <FaRegEdit className="mr-2" /> Edit
          </button>
        )}
        <button
          onClick={() => handleDelete(todo.id)}
          className="bg-cyan-700 text-white p-2 rounded-lg hover:bg-red-600 px-4 font-bold transition-all flex items-center"
        >
          <RiDeleteBin6Line className="mr-2" /> Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
