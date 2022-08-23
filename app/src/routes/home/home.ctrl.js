'use strict';

const User = require("../../models/User");
const UserStorage = require("../../models/UserStorage");

const output = {
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  },
  register: (req, res) => {
    res.render('home/register');
  },
  board: (req, res) => {
    res.render('home/board');
  }
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    try {
      const response = await user.register();
      return res.json(response);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = {
  output,
  process
};
