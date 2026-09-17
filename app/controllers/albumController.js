const albumModel = require("../models/albumModel");

exports.createAlbum = async(req, res) => {
    try {
        const album = new albumModel(req.body);
        await album.save();
        res.status(201).json(album);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllAlbum = async(req, res) => {
    try {
        const filter = {};
        if (req.query.userId) {
            filter.userId = req.query.userId;
        }
        const albums = await albumModel.find(filter);
        res.status(200).json(albums);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateAlbumById = async(req, res) => {
    try {
        const album = await albumModel.findByIdAndUpdate(req.params.albumId, req.body, { new: true });
        if (!album) return res.status(404).json({ error: "Album not found" });
        res.status(200).json(album);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAlbumById = async(req, res) => {
    try {
        const album = await albumModel.findById(req.params.albumId);
        if (!album) return res.status(404).json({ error: "Album not found" });
        res.status(200).json(album);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteAlbumById = async(req, res) => {
    try {
        const album = await albumModel.findByIdAndDelete(req.params.albumId);
        if (!album) return res.status(404).json({ error: "Album not found" });
        res.status(200).json({ message: "Album deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAlbumsOfUser = async(req, res) => {
    try {
        const albums = await albumModel.find({ userId: req.params.userId });
        res.status(200).json(albums);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};