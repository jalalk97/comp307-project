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

  const user = await User.findOne({ email }).lean().exec();
  const isPasswordCorrect =
    user && (await bcrypt.compare(password, user.password));

  if (!user || !isPasswordCorrect) {
    return res.status(401).json({
      message: "Email or password is invalid",
    });
  }

  const userForToken = {
    email: user.email,
    name: user.name,
    id: user._id,
  };

  const token = jwt.sign(
    userForToken,
    process.env.JWT_SECRET ||
      "b48636224ec98905f2d932a8196807792ab4a12d114af3e227d830a64d658acd27fea7745d25638d9dc6b0a1fc3270c5d2e9b9894a871777cf957be1e6f2e497",
  );

  res.status(200).json({
    token,
    user: userForToken,
  });
}

module.exports = {
  register,
  login,
};
