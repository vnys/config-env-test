'use strict';

const convict = require('convict'),
pckage = require('./package.json');

let conf = convict({
    env: {
        doc: "Applicaton environments",
        format  : ["development", "production"],
        default : "development",
        env     : "NODE_ENV"
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

conf.validate();

module.exports = conf;
