'use strict'

const express = require('express'),
    bunyan = require('bunyan'),
    app = express(),
    config = require('./config'),
    log = bunyan.createLogger({
        name: 'foo'
    });

app.get('/', (req, res) => {
    res.send(config.get('foo'));
})

const server = app.listen(config.get('httpServerPort'), () => {
    log.info('server running at http://localhost:' + server.address().port);
    log.info('server process has pid ' + process.pid);
    log.info('environment is: ' + config.get('env'));
})
