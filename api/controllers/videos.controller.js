const db = require('../db');

class VideosController {
    async getAll() {
        try {
            let result = await db.videos.findAll();
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
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    async createVideo(video) {
        try {
            let result = await db.videos.create(video);
            if (result = null) {
                return 'something wrong';
            }
            else {
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
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    async deleteVideo(videoId) {
        try {
            let comments = await db.comments.findAll({
                where: {
                    videoId: videoId,
                }
            });

            if (comments != null) {
                await comments.forEach(value => {
                    db.responseComments.destroy({
                        where: {
                            commentId: value.id,
                        }
                    })
                });

                await db.comments.destroy({
                    where: {
                        videoId: videoId,
                    }
                });

                let result = await db.videos.destroy({
                    where: {
                        id: videoId,
                    }
                });

                return result;

            }
            else {
                await db.comments.destroy({
                    where: {
                        videoId: videoId,
                    }
                });

                let result = await db.videos.destroy({
                    where: {
                        id: videoId,
                    }
                });

                return result;
            }
        }
        catch (err) {
            throw err;
        }
    }
}

module.exports = new VideosController();