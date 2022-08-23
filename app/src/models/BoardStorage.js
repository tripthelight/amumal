'use strict';

const fs = require('fs').promises;

class BoardStorage {
    static #getBoardInfo(data, id) {
        const boards = JSON.parse(data);
        const idx = boards.id.indexOf(id);
        const boardKeys = Object.keys(boards);
        const boardInfo = boardKeys.reduce((newBoard, info) => {
            newBoard[info] = boards[info][idx];
            return newBoard;
        }, {});
        return boardInfo;
    }

    static #getBoards(data, isAll, fields) {
        const boards = JSON.parse(data);
        if (isAll) return boards;
        // const newBoards = fields.reduce((newBoards, field) => {
        //     if (boards.hasOwnProperty(field)) {
        //         newBoards[field] = boards[field];
        //     }
        //     return newBoards;
        // }, {});
        // return newBoards;
    }

    static getBoards(isAll, ...fields) {
        return fs
            .readFile('./src/databases/board.json')
            .then((data) => {
                return this.#getBoards(data, isAll, fields);
            })
            .catch(console.error);
    }

    static getBoardInfo(id) {
        return fs
            .readFile('./src/databases/board.json')
            .then((data) => {
                return this.#getBoardInfo(data, id);
            })
            .catch(console.error);
    }

    static async save(boardInfo) {
        const boards = await this.getBoards(true);
        console.log('boards >>>>>>> ', boards);
        console.log('boardInfo >>>> ', boardInfo);
        boards.description.push(boardInfo.board);
        fs.writeFile('./src/databases/board.json', JSON.stringify(boards));
        return { success: true };
    }
};

module.exports = BoardStorage;
