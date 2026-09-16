const postModel = require("../models/postModel");

// POST /posts
exports.createPost = async(req, res) => {
    try {
        const post = new postModel(req.body);
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// GET /posts
exports.getAllPost = async(req, res) => {
    try {
        const filter = {};
        if (req.query.userId) {
            filter.userId = req.query.userId;
        }
        const posts = await postModel.find(filter);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// PUT /posts/:postId
exports.updatePostById = async(req, res) => {
    try {
        const post = await postModel.findByIdAndUpdate(req.params.postId, req.body, { new: true });
        if (!post) return res.status(404).json({ error: "Post not found" });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET /posts/:postId
exports.getPostById = async(req, res) => {
    try {
        const post = await postModel.findById(req.params.postId);
        if (!post) return res.status(404).json({ error: "Post not found" });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE /posts/:postId
exports.deletePostById = async(req, res) => {
    try {
        const post = await postModel.findByIdAndDelete(req.params.postId);
        if (!post) return res.status(404).json({ error: "Post not found" });
        res.status(200).json({ message: "Post deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET /users/:userId/posts
exports.getPostsOfUser = async(req, res) => {
    try {
        const posts = await postModel.find({ userId: req.params.userId });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};