const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    _id: { type: mongoose.Types.ObjectId },
    userId: { type: mongoose.Types.ObjectId, ref: "user" },
    title: { type: String, required: true },
    body: { type: String, required: true }
});

module.exports = mongoose.model('post', postSchema);