const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    _id: { type: mongoose.Types.ObjectId },
    postId: { type: mongoose.Types.ObjectId, ref: "post" },
    name: { type: String, required: true },
    email: { type: String, required: true },
    body: { type: String, required: true }
});

module.exports = mongoose.model('comment', commentSchema);