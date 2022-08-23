'use strict';

const Board = require("../../models/Board");
const BoardStorage = require("../../models/BoardStorage");



const output = {
  board: (req, res) => {
    res.render('home/board');
  }
};

const process = {
  board: async (req, res) => {
    const boardContent = new Board(req.body);
    try {
      const response = await boardContent.writeBoard();
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
