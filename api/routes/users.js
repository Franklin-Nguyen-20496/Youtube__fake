'use strict';
const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller.js');

class Router {
    registerRoutes() {
        router.route('/').get((req, res) => {
            return userController.getAll()
                .then((result) => {
                    res.json(result);
                })
                .catch(err => {
                    console.error(err);
                })
        })

        router.route('/').post((req, res) => {
            return userController.creatOne(req.body)
                .then((result) => {
                    res.json(result);
                })
                .catch(err => {
                    console.error(err);
                })
        })

        router.route('/account').post((req, res) => {
            return userController.findOneAccount(req.body)
                .then((result) => {
                    res.json(result);
                })
                .catch(err => {
                    console.error(err);
                })
        })

        router.route('/:id').get((req, res) => {
            return userController.getById(req.params.id)
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