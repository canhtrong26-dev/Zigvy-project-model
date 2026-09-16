const commentModel = require("../models/commentModel");

// POST /comments
exports.createComment = async(req, res) => {
    try {
        const comment = new commentModel(req.body);
        await comment.save();
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// GET /comments
exports.getAllComment = async(req, res) => {
    try {
        const filter = {};
        if (req.query.postId) {
            filter.postId = req.query.postId;
        }
        const comments = await commentModel.find(filter);
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// PUT /comments/:commentId
exports.updateCommentById = async(req, res) => {
    try {
        const comment = await commentModel.findByIdAndUpdate(req.params.commentId, req.body, { new: true });
        if (!comment) return res.status(404).json({ error: "Comment not found" });
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET /comments/:commentId
exports.getCommentById = async(req, res) => {
    try {
        const comment = await commentModel.findById(req.params.commentId);
        if (!comment) return res.status(404).json({ error: "Comment not found" });
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE /comments/:commentId
exports.deleteCommentById = async(req, res) => {
    try {
        const comment = await commentModel.findByIdAndDelete(req.params.commentId);
        if (!comment) return res.status(404).json({ error: "Comment not found" });
        res.status(200).json({ message: "Comment deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// GET /posts/:postId/comments
exports.getCommentsOfPost = async(req, res) => {
    try {
        const comments = await commentModel.find({ postId: req.params.postId });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};