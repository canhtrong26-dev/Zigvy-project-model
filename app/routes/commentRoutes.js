const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.post("/comments", commentController.createComment);
router.get("/comments", commentController.getAllComment);
router.put("/comments/:commentId", commentController.updateCommentById);
router.get("/comments/:commentId", commentController.getCommentById);
router.delete("/comments/:commentId", commentController.deleteCommentById);
router.get("/posts/:postId/comments", commentController.getCommentsOfPost);
module.exports = router;