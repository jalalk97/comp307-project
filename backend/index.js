require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT;

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () =>
    console.log(`Server listening at http://localhost:${PORT}`),
  );
});
