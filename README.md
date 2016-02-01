# config-env-test

How to set variables with [convict](https://github.com/mozilla/node-convict), and override them with env variables and [npm arguments](https://docs.npmjs.com/cli/run-script#description).

In config.js, [the default port](https://github.com/batfink/config-env-test/blob/master/config.js#L29) is 9999 and [the default value of "foo"](https://github.com/batfink/config-env-test/blob/master/config.js#L37) is "bar". In [the start-script](https://github.com/batfink/config-env-test/blob/master/package.json#L8) in package.json, the value of foo is overridden with the env-variable FOO, and the port-number is overridden with the argument port. 
