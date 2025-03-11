const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");
const admin = require("firebase-admin");

// Middleware to authenticate user
const auth = async (req, res, next) => {
  const token = req.headers.authorization.split("Bearer ")[1];
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

// Get all todos for the authenticated user
router.get("/", auth, async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user.uid });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new todo for the authenticated user
router.post("/", auth, async (req, res) => {
  const todo = new Todo({
    // ...existing code...
    userId: req.user.uid,
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ...existing code...

module.exports = router;
