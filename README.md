# config-env-test

How to set variables with convict, and override them with env variables and npm arguments.

In config.js, the default port is 9999 and the default value of "foo" is "bar". In the start-script in package.json, the value of foo is overridden with the env-variable FOO, and the port-number is overridden with the argument port. 
