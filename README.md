# config-env-test

How to set variables with [convict](https://github.com/mozilla/node-convict), and override them with env variables and [npm arguments](https://docs.npmjs.com/cli/run-script#description).

In config.js, the default port is 9999 and the default value of "foo" is "bar". In the start-script in package.json, the value of foo is overridden using the env-variable FOO, and the port-number is overridden with the argument port. 

**config.js**

```js
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
```

**start script**

```json
"scripts": {
  "start": "FOO=baz nodemon ./server.js --port=8888 | bunyan"
}
```

