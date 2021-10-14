const db = require('../db');

class ResponseCommentsController {
    async getAll() {
        try {
            let result = await db.responseComments.findAll();
            result = JSON.parse(JSON.stringify(result));
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
            result = JSON.parse(JSON.stringify(result));
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    async createResponseComment(value) {
        try {
            let result = await db.responseComments.create(value);
            result = JSON.parse(JSON.stringify(result));
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    async deleteResponseComment(id) {
        try {
            let result = await db.responseComments.destroy({
                where: {
                    id: id,
                }
            })
            result = JSON.parse(JSON.stringify(result));
            console.log('responseComments', result);
            return result;
        }
        catch (err) {
            throw err;
        }
    }
}

module.exports = new ResponseCommentsController();