const express = require("express");
// const connection=require("./sql")
const web = require("./routes/web");
const sqlController = require("./controller/mysql");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", web);

module.exports = app;
