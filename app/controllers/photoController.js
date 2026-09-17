const photoModel = require("../models/photoModel");

exports.createPhoto = async(req, res) => {
    try {
        const photo = new photoModel(req.body);
        await photo.save();
        res.status(201).json(photo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllPhoto = async(req, res) => {
    try {
        const filter = {};
        if (req.query.albumId) {
            filter.albumId = req.query.albumId;
        }
        const photos = await photoModel.find(filter);
        res.status(200).json(photos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.updatePhotoById = async(req, res) => {
    try {
        const photo = await photoModel.findByIdAndUpdate(req.params.photoId, req.body, { new: true });
        if (!photo) return res.status(404).json({ error: "Photo not found" });
        res.status(200).json(photo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPhotoById = async(req, res) => {
    try {
        const photo = await photoModel.findById(req.params.photoId);
        if (!photo) return res.status(404).json({ error: "Photo not found" });
        res.status(200).json(photo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletePhotoById = async(req, res) => {
    try {
        const photo = await photoModel.findByIdAndDelete(req.params.photoId);
        if (!photo) return res.status(404).json({ error: "Photo not found" });
        res.status(200).json({ message: "Photo deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getPhotosOfAlbum = async(req, res) => {
    try {
        const photos = await photoModel.find({ albumId: req.params.albumId });
        res.status(200).json(photos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};