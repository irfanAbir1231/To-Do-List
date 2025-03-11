import { useState, useEffect, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

export function useTodos() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [showAllTodos, setShowAllTodos] = useState(false);
  const [showAllCompletedTodos, setShowAllCompletedTodos] = useState(false);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  const saveToLS = useCallback((todoItems) => {
    localStorage.setItem("todos", JSON.stringify(todoItems));
  }, []);

  const handleAdd = useCallback(() => {
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
  }, [todo, todos, isEditing, currentTodo, saveToLS]);

  const handleEdit = useCallback(
    (id) => {
      const todoToEdit = todos.find((todo) => todo.id === id);
      setIsEditing(true);
      setCurrentTodo(todoToEdit);
      setTodo(todoToEdit.todo);
    },
    [todos]
  );

  const handleDelete = useCallback(
    (id) => {
      const todoElement = document.getElementById(id);
      if (todoElement) {
        todoElement.classList.add("slide-out");
        setTimeout(() => {
          const newTodos = todos.filter((todo) => todo.id !== id);
          setTodos(newTodos);
          saveToLS(newTodos);
        }, 500);
      }
    },
    [todos, saveToLS]
  );

  const handleCheckBox = useCallback(
    (e) => {
      const id = e.target.name;
      const newTodos = todos.map((todo) => {
        if (todo.id === id && !todo.iscompleted) {
          return { ...todo, iscompleted: true };
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
    },
    [todos, saveToLS]
  );

  const toggleShowAllTodos = useCallback(() => {
    setShowAllTodos((prev) => !prev);
  }, []);

  const toggleShowAllCompletedTodos = useCallback(() => {
    setShowAllCompletedTodos((prev) => !prev);
  }, []);

  return {
    todo,
    setTodo,
    todos,
    isEditing,
    currentTodo,
    showAllTodos,
    showAllCompletedTodos,
    handleAdd,
    handleEdit,
    handleDelete,
    handleCheckBox,
    toggleShowAllTodos,
    toggleShowAllCompletedTodos,
  };
}
