const userController = require("./users");

function register(req, res) {
  userController.createUser(req, res);
}

function login(req, res) {

}

function logout(req, res) {

}

module.exports = {
  register,
  login,
  logout,
};
