const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI ||
        "mongodb+srv://admin:XjLT6K5xj7HVw318@cluster0.ud4jx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    );
  } catch (e) {
    console.log(e);
  }
};

module.exports = connectDB;
