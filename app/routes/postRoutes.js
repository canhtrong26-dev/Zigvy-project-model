const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.post("/posts", postController.createPost);
router.get("/posts", postController.getAllPost);
router.put("/posts/:postId", postController.updatePostById);
router.get("/posts/:postId", postController.getPostById);
router.delete("/posts/:postId", postController.deletePostById);
router.get("/users/:userId/posts", postController.getPostsOfUser);

module.exports = router;