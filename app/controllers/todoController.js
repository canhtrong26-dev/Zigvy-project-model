const todoModel = require("../models/todoModel");

exports.createTodo = async(req, res) => {
    try {
        const todo = new todoModel(req.body);
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.getAllTodo = async(req, res) => {
    try {
        const filter = {};
        if (req.query.userId) {
            filter.userId = req.query.userId;
        }
        const todos = await todoModel.find(filter);
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateTodoById = async(req, res) => {
    try {
        const todo = await todoModel.findByIdAndUpdate(req.params.todoId, req.body, { new: true });
        if (!todo) return res.status(404).json({ error: "Todo not found" });
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTodoById = async(req, res) => {
    try {
        const todo = await todoModel.findById(req.params.todoId);
        if (!todo) return res.status(404).json({ error: "Todo not found" });
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteTodoById = async(req, res) => {
    try {
        const todo = await todoModel.findByIdAndDelete(req.params.todoId);
        if (!todo) return res.status(404).json({ error: "Todo not found" });
        res.status(200).json({ message: "Todo deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getTodosOfUser = async(req, res) => {
    try {
        const todos = await todoModel.find({ userId: req.params.userId });
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};