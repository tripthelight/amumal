'use strict';

const Board = require("../../models/Board");
const BoardStorage = require("../../models/BoardStorage");
const fs = require('fs');


const output = {
  board: (req, res) => {
    res.render('home/board');
  },
  boardList: (req, res) => {
    let boardLists;
    fs.readFile('./src/databases/board.json', (err, data) => {
      if(err) throw err;
      boardLists = JSON.parse(data);
      processFile(boardLists); 
    });
    let processFile = (list) => {
      // res.json(list);

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(list));
    }
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
