const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const photoSchema = new Schema({
    _id: { type: mongoose.Types.ObjectId },
    albumId: { type: mongoose.Types.ObjectId, ref: "album" },
    title: { type: String, required: true },
    url: { type: String, required: true },
    thumbnailUrl: { type: String, required: true }
});

module.exports = mongoose.model('photo', photoSchema);