const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    _id: { type: mongoose.Types.ObjectId },
    userId: { type: mongoose.Types.ObjectId, ref: "user" },
    title: { type: String, required: true }
});

module.exports = mongoose.model('album', albumSchema);