'use strict';
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const moment = require("moment");
const app = express();

var corsOptions = {
    origin: "http://localhost:4200"
};

app.use(cors(corsOptions));
app.use(morgan("combined"));

// parse requests of content-type - application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configure routes
const routerIndex = require("./routes")(app);
routerIndex.registerRoutes();

// connect database
const port = process.env.PORT || 3004;
const env = process.env.NODE_ENV || "staging";
const db = require("./db");
db.connect()
    .then(sql => {
        console.log(`timezone : `, new Date(), moment().format());
        app.listen(port, () => {
            console.log(
                `Running http server in: ${env} and listening on port: localhost:${port}`
            );
        });
    })
    .catch(error => {
        console.error("@error", error);
        process.exit();
    });
