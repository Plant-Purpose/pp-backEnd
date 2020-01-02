const express = require('express');

// Middleware
const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors');

// Routes
const routes = require('../routes');


// Server
const server = express();

server.use(
    express.json(),
    helmet(),
    cors(),
    logger('dev')
);

server.use('/api', routes);

server.get('/', (req, res) => {
    res.json({ message: "Server Running..." });
});

module.exports = server;