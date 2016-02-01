'use strict';

const convict = require('convict'),
    path = require('path'),
    fs = require('fs'),
    pckage = require('./package.json');

let conf = convict({
    env: {
        doc: "Applicaton environments",
        format  : ["development", "production"],
        default : "development",
        env     : "NODE_ENV",
        arg     : "env"
    },

    version: {
        doc     : "Version of the application",
        format  : String,
        default : pckage.version
    },

    name: {
        doc     : "Name of the application",
        format  : String,
        default : pckage.name
    },

    httpServerPort: {
        doc     : "The port the server should bind to",
        format  : "port",
        default : 9999,
        env     : "PORT",
        arg     : "port"
    },

    foo: {
        doc: "just testing…",
        format: String,
        default: "bar",
        env: "FOO"
    }
});


// Load and validate configuration depending on environment

if (fs.existsSync(path.resolve(__dirname, './local.json'))) {
    conf.loadFile([path.resolve(__dirname, './', conf.get('env') + '.json'), path.resolve(__dirname, '../config/local.json')]);
} else {
    conf.loadFile([path.resolve(__dirname, './', conf.get('env') + '.json')]);
}

conf.validate();

module.exports = conf;
