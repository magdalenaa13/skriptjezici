require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");

app.use(express.json());

app.get("/api", (req, res) => {
    res.json({
        success: 1,
        message: "REST radi"
    });
});

app.listen(3000, () => {
    console.log("Sever radi");

});