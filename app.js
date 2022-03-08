const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const userRoute = require("./api/routes/userRoute");
app.use("/users", userRoute);

const addRoute = require("./api/routes/addRoute");
app.use("/add", addRoute);

const updateRoute = require("./api/routes/updateRoute");
app.use("/update", updateRoute);

module.exports = app;
