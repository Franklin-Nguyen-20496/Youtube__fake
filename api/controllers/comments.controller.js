'use strict';
const db = require('../db');

class VideosController {
    async getAll() {
        try {
            let result = await db.comments.findAll();
            result = JSON.parse(JSON.stringify(result));
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    async getForVideo(videoId) {
        try {
            let result = await db.comments.findAll({
                where: {
                    videoId: videoId,
                }
            })
            result = JSON.parse(JSON.stringify(result));
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    async createComment(comment) {
        try {
            let result = await db.comments.create(comment);
            result = JSON.parse(JSON.stringify(result));
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    async deleteComment(id) {
        try {
            await db.responseComments.destroy({
                where: {
                    commentId: id,
                }
            });
            let result = await db.comments.destroy({
                where: {
                    id: id,
                }
            });
            console.err('result delete comment', result);
            result = JSON.parse(JSON.stringify(result));
            return result;
        }
        catch (err) {
            throw err;
        }
    }
}

module.exports = new VideosController();