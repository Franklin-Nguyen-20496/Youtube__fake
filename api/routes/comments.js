'use strict';
const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments.controller.js');

class Router {
    registerRoutes() {
        router.route('/').get((req, res) => {
            return commentsController.getAll()
                .then((result) => {
                    res.json(result);
                })
                .catch(err => {
                    res.json(err);
                })
        })

        router.route('/:id').delete((req, res) => {

        })

        router.route('/find').get((req, res) => {
            return commentsController.getForVideo(req.query.video)
                .then((result) => {
                    res.json(result);
                })
                .catch(err => {
                    res.json(err);
                })
        })

        router.route('/').post((req, res) => {
            commentsController.createComment(req.body)
                .then((comment) => {
                    console.log('comment created:', comment);
                    res.json(comment);
                })
                .catch((err) => {
                    res.json(err);
                })
        })

        return router;
    };
}

module.exports = new Router().registerRoutes();