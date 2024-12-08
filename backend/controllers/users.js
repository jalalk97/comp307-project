const User = require("../models/user");
const bcrypt = require("bcrypt");
const { validateMcGillEmail } = require("../utils/validation");

async function createUser(req, res) {
  const { email, password } = req.body;

  if (!email || !password || !validateMcGillEmail(email)) {
    return res.status(422).json({
      message: "Invalid email or password",
    });
  }

  const exisitingUser = await User.findOne({ email }).lean().exec();

  if (exisitingUser) {
    return res.status(409).json({
      message: "This email address is already used",
    });
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    password: passwordHash,
  });

  console.log(user);

  if (user) {
    res.status(201).json(user);
  } else {
    return res.status(422).json({
      message: "Invalid email or password",
    });
  }
}

module.exports = {
  createUser,
};
