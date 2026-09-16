const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/users", userController.createUser);
router.get("/users", userController.getAllUser);
router.put("/users/:userId", userController.updateUserById);
router.get("/users/:userId", userController.getUserById);
router.delete("/users/:userId", userController.deleteUserById);

module.exports = router;