const db = require('../db');

class VideosController {
    async getAll() {
        try {
            let result = await db.comments.findAll();
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
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    async createComment(comment) {
        try {
            const result = await db.comments.create(comment);
            return result;
        }
        catch (err) {
            throw err;
        }
    }
}

module.exports = new VideosController();