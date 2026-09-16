const express = require("express");
const mongoose = require("mongoose");

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

app.listen(port, () => {
    console.log("App listening on port " + port);
});