import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { MdAddTask, MdOutlineUpdate } from "react-icons/md";

// Main App component
function App() {
  // State variables
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [showAllTodos, setShowAllTodos] = useState(false);
  const [showAllCompletedTodos, setShowAllCompletedTodos] = useState(false);
  const [showCompletedTodos, setShowCompletedTodos] = useState(false);

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      setTodos(JSON.parse(todos));
    }
  }, []);

  // Save to local storage
  const saveToLS = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // Function to handle adding a new todo or updating an existing one
  const handleAdd = () => {
    if (todo.trim() === "") return;
    let newTodos;
    if (isEditing) {
      newTodos = todos.map((item) =>
        item.id === currentTodo.id ? { ...item, todo } : item
      );
      setIsEditing(false);
      setCurrentTodo({});
    } else {
      newTodos = [...todos, { id: uuidv4(), todo, iscompleted: false }];
    }
    setTodos(newTodos);
    saveToLS(newTodos);
    setTodo("");
  };

  // Function to handle editing a todo
  const handleEdit = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setIsEditing(true);
    setCurrentTodo(todoToEdit);
    setTodo(todoToEdit.todo);
  };

  // Function to handle deleting a todo with animation
  const handleDelete = (id) => {
    const todoElement = document.getElementById(id);
    if (todoElement) {
      todoElement.classList.add("slide-out");
      setTimeout(() => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
        saveToLS(newTodos);
      }, 500);
    }
  };

  // Function to handle input change
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // Function to handle checkbox change (marking todo as completed)
  const handleCheckBox = (e) => {
    let id = e.target.name;
    let newTodos = todos.map((todo) => {
      if (todo.id === id && !todo.iscompleted) {
        todo.iscompleted = !todo.iscompleted;
      }
      return todo;
    });
    setTodos(newTodos);
    saveToLS(newTodos);
    const todoElement = document.getElementById(id);
    if (todoElement) {
      todoElement.classList.add("slide-out");
      setTimeout(() => {
        setTodos(newTodos);
      }, 1000);
    }
  };

  const handleShowMoreTodos = () => {
    setShowAllTodos(!showAllTodos);
  };

  const handleShowMoreCompletedTodos = () => {
    setShowAllCompletedTodos(!showAllCompletedTodos);
  };

  const showYourTodos = () => {
    setShowCompletedTodos(false);
  };

  const handleShowCompletedTodos = () => {
    setShowCompletedTodos(true);
  };

  return (
    <>
      <Navbar showYourTodos={showYourTodos} showCompletedTodos={handleShowCompletedTodos} />
      <div className="container mx-auto bg-white rounded-xl p-5 my-5 min-h-[80vh] shadow-lg">
        <div className="addTodo flex items-center mb-5 justify-center">
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="border-2 border-gray-300 rounded-lg p-2 w-3/4 focus:outline-none focus:border-cyan-700"
            placeholder="Add a new todo"
          />
          <button
            onClick={handleAdd}
            className="bg-cyan-700 text-white p-2 rounded-lg hover:bg-blue-600 px-4 font-bold ml-2 transition-all flex items-center"
          >
            {isEditing ? <MdOutlineUpdate className="mr-2" /> : <MdAddTask className="mr-2" />}
            {isEditing ? "Update" : "Add"}
          </button>
        </div>
        {!showCompletedTodos && (
          <>
            <h1 id="your-todos" className="text-2xl font-bold my-5 text-cyan-700">Your Todos</h1>
            <div className="todos fixed-height border-2 border-gray-300 p-2 rounded-lg overflow-y-auto">
              {todos.length === 0 ? (
                <div className="motivational-message text-center text-2xl font-bold text-blue-600">
                  Start planning your day! Add your first task.
                </div>
              ) : todos.filter(todo => !todo.iscompleted).length === 0 && todos.length > 0 ? (
                <div className="congratulations-message text-center text-2xl font-bold text-green-600 animate-bounce">
                  Congratulations! <br /> Irfan your All tasks are completed!
                </div>
              ) : (
                todos.filter(todo => !todo.iscompleted).slice(0, showAllTodos ? todos.length : 5).map((todo) => (
                  <div
                    key={todo.id}
                    id={todo.id}
                    className="todo flex justify-between items-center bg-gray-100 p-2 my-2 rounded-lg shadow-md transition-all"
                  >
                    <div className="flex items-center">
                      <input
                        name={todo.id}
                        onChange={handleCheckBox}
                        type="checkbox"
                        checked={todo.iscompleted}
                        className="w-6 h-6 border-2 border-gray-400 rounded-lg"
                      />
                      <div
                        className={`ml-2 font-semibold text-lg ${todo.iscompleted ? "line-through text-green-600" : ""}`}
                      >
                        {todo.todo}
                      </div>
                    </div>
                    <div className="buttons flex space-x-2">
                      <button
                        onClick={() => handleEdit(todo.id)}
                        className="bg-cyan-700 text-white p-2 rounded-lg hover:bg-blue-600 px-4 font-bold transition-all flex items-center"
                      >
                        <FaRegEdit className="mr-2" /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(todo.id)}
                        className="bg-cyan-700 text-white p-2 rounded-lg hover:bg-blue-600 px-4 font-bold transition-all flex items-center"
                      >
                        <RiDeleteBin6Line className="mr-2" /> Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
              {todos.filter(todo => !todo.iscompleted).length > 5 && (
                <button
                  onClick={handleShowMoreTodos}
                  className="text-cyan-700 font-bold mt-2"
                >
                  {showAllTodos ? "See Less" : "See More"}
                </button>
              )}
            </div>
          </>
        )}
        {showCompletedTodos && (
          <>
            <h1 id="completed-todos" className="text-2xl font-bold my-5 text-cyan-700">Completed Todos</h1>
            <div className="completed-todos fixed-height border-2 border-gray-300 p-2 rounded-lg overflow-y-auto">
              {todos.filter(todo => todo.iscompleted).slice(0, showAllCompletedTodos ? todos.length : 5).map((todo) => (
                <div
                  key={todo.id}
                  id={todo.id}
                  className="todo flex justify-between items-center bg-gray-100 p-2 my-2 rounded-lg shadow-md transition-all"
                >
                  <div className="flex items-center">
                    <input
                      name={todo.id}
                      onChange={handleCheckBox}
                      type="checkbox"
                      checked={todo.iscompleted}
                      disabled={todo.iscompleted}
                      className="w-6 h-6 border-2 border-gray-400 rounded-lg"
                    />
                    <div
                      className={`ml-2 font-semibold text-lg ${todo.iscompleted ? "line-through text-cyan-700" : ""}`}
                    >
                      {todo.todo}
                    </div>
                  </div>
                  <div className="buttons flex space-x-2">
                    <button
                      onClick={() => handleDelete(todo.id)}
                      className="bg-cyan-700 text-white p-2 rounded-lg hover:bg-blue-600 px-4 font-bold transition-all flex items-center"
                    >
                      <RiDeleteBin6Line className="mr-2" /> Delete
                    </button>
                  </div>
                </div>
              ))}
              {todos.filter(todo => todo.iscompleted).length > 5 && (
                <button
                  onClick={handleShowMoreCompletedTodos}
                  className="text-cyan-700 font-bold mt-2"
                >
                  {showAllCompletedTodos ? "See Less" : "See More"}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
