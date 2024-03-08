const express = require("express");
const listRouter = require("./routers/listRouter");
// const tourRouter = require("./routers/tourRouter");
const app = express();
app.use(express.json());

app.use("/api/v1/list", listRouter);
// app.use("/api/v1/tour", tourRouter);

module.exports = app;

