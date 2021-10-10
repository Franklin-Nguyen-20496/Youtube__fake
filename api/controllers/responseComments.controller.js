const db = require('../db');

class ResponseCommentsController {
    async getAll() {
        try {
            let result = await db.responseComments.findAll();
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    async getResponseCommentsForComment(id) {
        try {
            let result = await db.responseComments.findAll({
                where: {
                    commentId: id,
                }
            });
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    async createResponseComment(value) {
        try {
            let result = await db.responseComments.create(value);
            return result;
        }
        catch (err) {
            throw err;
        }
    }
}

module.exports = new ResponseCommentsController();