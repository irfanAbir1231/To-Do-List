const Todo = require("../models/todoModel");

// Get all todos for the current user
const getTodos = async (req, res) => {
  try {
    // Only retrieve todos belonging to the current user
    const todos = await Todo.find({ user: req.user.id });

    res.status(200).json({
      status: "success",
      results: todos.length,
      data: {
        todos,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

// Create new todo for the current user
const createTodo = async (req, res) => {
  try {
    if (!req.body.text) {
      return res.status(400).json({ message: "Please add a todo text" });
    }

    // Add the current user ID to the todo
    const newTodo = await Todo.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json({
      status: "success",
      data: {
        todo: newTodo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Get a specific todo (ensure it belongs to the current user)
const getTodo = async (req, res) => {
  try {
    const todo = await Todo.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!todo) {
      return res.status(404).json({
        status: "fail",
        message: "No todo found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        todo,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

// Update a todo (ensure it belongs to the current user)
const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!todo) {
      return res.status(404).json({
        status: "fail",
        message: "No todo found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        todo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Delete a todo (ensure it belongs to the current user)
const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!todo) {
      return res.status(404).json({
        status: "fail",
        message: "No todo found with that ID",
      });
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports = {
  getTodos,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
};
