const userService = require('../services/userService');

module.exports = {
  register(req, res) {
    const { username, password } = req.body;
    const result = userService.registerUser(username, password);
    if (result.error) {
      return res.status(400).json(result);
    }
    res.status(201).json(result);
  },

  login(req, res) {
    const { username, password } = req.body;
    const result = userService.loginUser(username, password);
    if (result.error) {
      return res.status(401).json(result);
    }
    res.json(result);
  }
};
