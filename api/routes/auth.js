'use strict';
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller.js');

class Router {
    registerRoutes() {
        router.route('/').get((req, res) => {
            return authController.findOne()
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