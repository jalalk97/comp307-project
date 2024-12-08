const express = require("express");
const logger = require("morgan");
const fs = require("fs");
const cors = require("cors");
const connectDB = require("./config/db");
const corsOptions = require("./config/corsOptions");

const app = express();

connectDB();

app.use(
  logger("common", {
    stream: fs.createWriteStream("./logs/access.log", { flags: "a" }),
  }),
);
app.use(logger("dev"));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  return res.send("<h1>Hello World!</h1>");
});

app.use("/auth", require("./routes/auth"));
app.use("/users", require("./routes/users"));

module.exports = app;
