'use strict';

const BoardStorage = require('./BoardStorage');

class Board {
    constructor(body) {
        this.body = body;
    }

    async writeBoard() {
        const client = this.body;
        try {
            const response = await BoardStorage.save(client);
            return response;
        } catch (err) {
            return { success: false, msg: err };
        }
    }
}

module.exports = Board;
