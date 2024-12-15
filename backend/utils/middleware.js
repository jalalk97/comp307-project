const jwt = require("jsonwebtoken");
const User = require("../models/user");

const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.startsWith("Bearer ")) {
    return authorization.replace("Bearer ", "");
  }
  return null;
};

const userExtractor = async (request, response, next) => {
  const token = getTokenFrom(request);

  if (!token) {
    return response.status(401).json({ message: "token missimg" });
  }

  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  if (!decodedToken.id) {
    return response.status(401).json({ message: "token invalid" });
  }

  const user = await User.findById(decodedToken.id);

  if (!user) {
    return response.status(401).json({ message: "user not found" });
  }

  request.user = user;

  next();
};

module.exports = {
  userExtractor,
};
