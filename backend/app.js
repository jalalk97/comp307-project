const express = require("express");
const logger = require("morgan");
const fs = require("fs");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");

const app = express();

app.use(logger('common', { stream: fs.createWriteStream('./logs/access.log', { flags: 'a' }) }));
app.use(logger('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  return res.send("<h1>Hello World!</h1>");
})

module.exports = app;
