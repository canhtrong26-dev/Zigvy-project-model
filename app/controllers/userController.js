const userModel = require("../models/userModel");

// POST /users
exports.createUser = async(req, res) => {
    try {
        const user = new userModel(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// GET /users
exports.getAllUser = async(req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// PUT /users/:userId
exports.updateUserById = async(req, res) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        if (!user) return res.status(404).json({ error: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET /users/:userId
exports.getUserById = async(req, res) => {
    try {
        const user = await userModel.findById(req.params.userId);
        if (!user) return res.status(404).json({ error: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE /users/:userId
exports.deleteUserById = async(req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.userId);
        if (!user) return res.status(404).json({ error: "User not found" });
        res.status(200).json({ message: "User deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};