const express = require("express");
const router = express.Router();
const albumController = require("../controllers/albumController");

router.post("/albums", albumController.createAlbum);
router.put("/albums/:albumId", albumController.updateAlbumById);
router.get("/albums", albumController.getAllAlbum);
router.get("/albums/:albumId", albumController.getAlbumById);
router.delete("/albums/:albumId", albumController.deleteAlbumById);
router.get("/users/:userId/albums", albumController.getAlbumsOfUser);



module.exports = router;