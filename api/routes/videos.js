'use strict';
const express = require('express');
const router = express.Router();
const videosController = require('../controllers/videos.controller.js');

class Router {
    registerRoutes() {

        router.route('/auth').get((req, res) => {
            // return res.json(req.query.auth);
            return videosController.findVideosByUser(Number(req.query.auth))
                .then((result) => {
                    res.json(result);
                })
                .catch(err => {
                    console.error(err);
                })
        })

        router.route('/').get((req, res) => {
            return videosController.getAll()
                .then((result) => {
                    res.json(result);
                })
                .catch(err => {
                    console.error(err);
                })
        })

        router.route('/:id').get((req, res) => {
            return videosController.getById(req.params.id)
                .then((result) => {
                    res.json(result);
                })
                .catch(err => {
                    console.error(err);
                })
        })

        router.route('/').post((req, res) => {
            return videosController.createVideo(req.body)
                .then((result) => {
                    res.json(result);
                })
                .catch(err => {
                    console.error(err);
                })
        })

        router.route('/:id').delete((req, res) => {
            // res.json(req.params.id);
            return videosController.deleteVideo(req.params.id)
                .then((result) => {
                    res.json(result);
                })
                .catch(err => {
                    console.error(err);
                })
        })

        return router;
    };
}

module.exports = new Router().registerRoutes();