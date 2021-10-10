'use strict';
const apiRoutes = require('express').Router();
const usersRouter = require('./users');
const authRouter = require('./auth');
const videosRouter = require('./videos');
const commentsRouter = require('./comments');
const responseCommentsRouter = require('./responseComments');

class RouterIndex {
    constructor(app) {
        this.app = app;
    }

    registerRoutes() {
        this.app.use('/', apiRoutes);
        apiRoutes.use('/users', usersRouter);
        apiRoutes.use('/auth', authRouter);
        apiRoutes.use('/videos', videosRouter);
        apiRoutes.use('/comments', commentsRouter);
        apiRoutes.use('/responseComments', responseCommentsRouter);
    }
}

module.exports = (app) => {
    return new RouterIndex(app);
}