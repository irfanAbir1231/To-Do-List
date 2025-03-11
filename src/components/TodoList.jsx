import React from "react";
import TodoItem from "./TodoItem";

function TodoList({
  todos,
  showAll,
  toggleShowAll,
  completed,
  handleCheckBox,
  handleEdit,
  handleDelete,
  limit = 5,
}) {
  const filteredTodos = todos.filter((todo) =>
    completed ? todo.iscompleted : !todo.iscompleted
  );

  const displayedTodos = showAll
    ? filteredTodos
    : filteredTodos.slice(0, limit);

  if (filteredTodos.length === 0) {
    if (!completed && todos.length > 0) {
      return (
        <div className="congratulations-message text-center text-2xl font-bold text-green-600 animate-pulse">
          Congratulations! <br /> All your tasks are completed!
        </div>
      );
    } else if (!completed) {
      return (
        <div className="motivational-message text-center text-2xl font-bold text-blue-600">
          Start planning your day! Add your first task.
        </div>
      );
    }
    return (
      <div className="empty-message text-center text-xl text-gray-500">
        No completed tasks yet.
      </div>
    );
  }

  return (
    <div className="todo-list">
      {displayedTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleCheckBox={handleCheckBox}
          handleEdit={!completed ? handleEdit : null}
          handleDelete={handleDelete}
          completed={completed}
        />
      ))}

      {filteredTodos.length > limit && (
        <button
          onClick={toggleShowAll}
          className="text-cyan-700 font-bold mt-2 hover:underline"
        >
          {showAll ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
}

export default TodoList;
