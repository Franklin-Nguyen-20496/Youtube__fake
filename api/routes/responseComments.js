'use strict';
const express = require('express');
const router = express.Router();
const responseCommentsController = require('../controllers/responseComments.controller.js');

class Router {
    registerRoutes() {
        router.route('/').get((req, res) => {
            return responseCommentsController.getAll()
                .then((result) => {
                    res.json(result);
                })
                .catch(err => {
                    console.error(err);
                })
        })

        router.route('/').post((req, res) => {
            console.log('body', req.body);
            return responseCommentsController.createResponseComment(req.body)
                .then((result) => {
                    res.json(result);
                })
                .catch(err => {
                    res.json(err);
                })
        })

        router.route('/find').get((req, res) => {
            return responseCommentsController.getResponseCommentsForComment(req.query.commentId)
                .then((result) => {
                    res.json(result);
                })
                .catch(err => {
                    res.json(err);
                })
        })

        router.route('/:id').delete((req, res) => {
            return responseCommentsController.deleteResponseComment(req.params.id)
                .then((result) => {
                    res.json(result);
                })
                .catch(err => {
                    res.json(err);
                })
        })

        return router;
    };
}

module.exports = new Router().registerRoutes();