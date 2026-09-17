const express = require("express");
const router = express.Router();
const photoController = require("../controllers/photoController");

router.post("/photos", photoController.createPhoto);
router.get("/photos", photoController.getAllPhoto);
router.put("/photos/:photoId", photoController.updatePhotoById);
router.get("/photos/:photoId", photoController.getPhotoById);
router.delete("/photos/:photoId", photoController.deletePhotoById);
router.get("/albums/:albumId/photos", photoController.getPhotosOfAlbum);

module.exports = router;