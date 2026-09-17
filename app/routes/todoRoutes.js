const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router.post("/todos", todoController.createTodo);
router.get("/todos", todoController.getAllTodo);
router.get("/todos/:todoId", todoController.getTodoById);
router.put("/todos/:todoId", todoController.updateTodoById);
router.delete("/todos/:todoId", todoController.deleteTodoById);
router.get("/users/:userId/todos", todoController.getTodosOfUser);




module.exports = router;