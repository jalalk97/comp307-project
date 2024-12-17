const express = require("express");
const logger = require("morgan");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const app = express();

// Ensure the 'logs' directory exists
const logDir = "./logs";
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true }); // Create the directory if it doesn't exist
}

connectDB();

app.use(
  logger("common", {
    stream: fs.createWriteStream(`${logDir}/access.log`, { flags: "a" }),
  }),
);
app.use(logger("dev"));
app.use(cors());
app.use(express.static("dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  return res.send("<h1>Hello World!</h1>");
});

app.use("/auth", require("./routes/auth"));
app.use("/users", require("./routes/users"));
app.use("/feedback", require("./routes/feedback"));
app.use("/meeting", require("./routes/meeting"));
app.use("/booking", require("./routes/booking"));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

module.exports = app;
