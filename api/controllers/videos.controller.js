const db = require('../db');

class VideosController {
    async getAll() {
        try {
            let result = await db.videos.findAll();
            result = JSON.parse(JSON.stringify(result));
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    async getById(id) {
        try {
            let result = await db.videos.findOne({
                where: { id: id }
            });
            result = JSON.parse(JSON.stringify(result));
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    async createVideo(video) {
        try {
            let result = await db.videos.create(video);
            if (result === null) {
                return 'something wrong';
            }
            else {
                result = JSON.parse(JSON.stringify(result));
                return result;
            }
        }
        catch (err) {
            throw err;
        }
    }

    async findVideosByUser(id) {
        try {
            let result = await db.videos.findAll({
                where: {
                    authorId: id,
                }
            });
            result = JSON.parse(JSON.stringify(result));
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    async deleteVideo(videoId) {
        try {
            let options = {
                where: {
                    videoId: videoId
                }
            }
            await db.responseComments.destroy(options);
            await db.comments.destroy(options);
            let result = await db.videos.destroy({
                where: {
                    id: videoId,
                },
            })
            result = JSON.parse(JSON.stringify(result));
            return result;
        }
        catch (err) {
            throw err;
        }
    }
}

module.exports = new VideosController();