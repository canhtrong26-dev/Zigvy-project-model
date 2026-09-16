const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    _id: { type: mongoose.Types.ObjectId },
    userId: { type: mongoose.Types.ObjectId, ref: "user" },
    title: { type: String, required: true },
    completed: { type: Boolean, required: true }
});

module.exports = mongoose.model('todo', todoSchema);