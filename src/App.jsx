import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AuthScreen from "./components/AuthScreen";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useAuth } from "./hooks/useAuth";
import { useTodos } from "./hooks/useTodos";

function App() {
  const [showCompletedTodos, setShowCompletedTodos] = useState(false);
  const { user, authError, handleLogout, signInWithGoogle, signInWithGitHub } =
    useAuth();

  const {
    todo,
    setTodo,
    todos,
    isEditing,
    showAllTodos,
    showAllCompletedTodos,
    handleAdd,
    handleEdit,
    handleDelete,
    handleCheckBox,
    toggleShowAllTodos,
    toggleShowAllCompletedTodos,
  } = useTodos();

  const showYourTodos = () => {
    setShowCompletedTodos(false);
  };

  const handleShowCompletedTodos = () => {
    setShowCompletedTodos(true);
  };

  if (!user) {
    return (
      <AuthScreen
        signInWithGoogle={signInWithGoogle}
        signInWithGitHub={signInWithGitHub}
        authError={authError}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        user={user}
        handleLogout={handleLogout}
        showYourTodos={showYourTodos}
        showCompletedTodos={handleShowCompletedTodos}
        activeTab={showCompletedTodos ? "completed" : "active"}
      />

      <div className="container mx-auto bg-white rounded-xl p-6 my-6 min-h-[80vh] shadow-lg max-w-4xl">
        <TodoForm
          todo={todo}
          setTodo={setTodo}
          handleAdd={handleAdd}
          isEditing={isEditing}
        />

        {!showCompletedTodos ? (
          <>
            <h1
              id="your-todos"
              className="text-2xl font-bold my-5 text-cyan-700 border-b border-gray-200 pb-2"
            >
              Your Todos
            </h1>
            <div className="todos fixed-height p-2 rounded-lg overflow-y-auto">
              <TodoList
                todos={todos}
                showAll={showAllTodos}
                toggleShowAll={toggleShowAllTodos}
                completed={false}
                handleCheckBox={handleCheckBox}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </div>
          </>
        ) : (
          <>
            <h1
              id="completed-todos"
              className="text-2xl font-bold my-5 text-cyan-700 border-b border-gray-200 pb-2"
            >
              Completed Todos
            </h1>
            <div className="completed-todos fixed-height p-2 rounded-lg overflow-y-auto">
              <TodoList
                todos={todos}
                showAll={showAllCompletedTodos}
                toggleShowAll={toggleShowAllCompletedTodos}
                completed={true}
                handleCheckBox={handleCheckBox}
                handleDelete={handleDelete}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
