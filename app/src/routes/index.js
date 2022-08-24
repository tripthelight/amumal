'use strict';

const express = require('express');
const router = express.Router();

const homeCtrl = require('./home/home.ctrl');
const boardCtrl = require('./board/board.ctrl');

router.get('/', homeCtrl.output.home);
router.get('/login', homeCtrl.output.login);
router.get('/register', homeCtrl.output.register);
router.post('/login', homeCtrl.process.login);
router.post('/register', homeCtrl.process.register);

router.get('/board', boardCtrl.output.board);
router.get('/boardList', boardCtrl.output.boardList);
router.post('/board', boardCtrl.process.board);

module.exports = router;
