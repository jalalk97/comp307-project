const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userController = require("./users");

function register(req, res) {
  return userController.createUser(req, res);
}

async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({
      message: "Email or password is invalid",
    });
  }

  const user = await User.findOne({ email }).lean();
  const isPasswordCorrect = user && await bcrypt.compare(password, user.password);

  if (!user || !isPasswordCorrect) {
    return res.status(401).json({
      message: "Email or password is invalid",
    });
  }

  const userForToken = {
    email: user.email,
    id: user._id,
  };

  const token = jwt.sign(userForToken, process.env.JWT_SECRET);

  res.status(200).json({
    token,
    user: {
      email: user.email,
      id: user._id,
    },
  });
}

function logout(req, res) {

}

module.exports = {
  register,
  login,
  logout,
};