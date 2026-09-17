const express = require("express");
const mongoose = require("mongoose");

const userModel = require("./app/models/userModel");
const postModel = require("./app/models/postModel");
const commentModel = require("./app/models/commentModel");
const albumModel = require("./app/models/albumModel");
const photoModel = require("./app/models/photoModel");
const todoModel = require("./app/models/todoModel");

const userRoutes = require("./app/routes/userRoutes");
const postRoutes = require("./app/routes/postRoutes");
const commentRoutes = require("./app/routes/commentRoutes");
const albumRoutes = require("./app/routes/albumRoutes");
const photoRoutes = require("./app/routes/photoRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const port = 8000;

mongoose.connect("mongodb://localhost:27017/Zigvy_Interview")
    .then(() => console.log("Connect MongoDB successfully!"))
    .catch((err) => { throw err; });

app.get("/", (request, response) => {
    let today = new Date();
    response.status(200).json({
        message: `Xin chào, hôm nay là ngày ${today.getDate()} tháng ${today.getMonth() + 1} năm ${today.getFullYear()}`
    });
});

app.use("/", userRoutes);
app.use("/", postRoutes);
app.use("/", commentRoutes);
app.use("/", albumRoutes);
app.use("/", photoRoutes);

app.listen(port, () => {
    console.log("App listening on port " + port);
});