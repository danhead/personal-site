# Personal website

![me](public/images/me_128wr.png)

Build: [![CircleCI](https://circleci.com/gh/danhead/personal-site/tree/master.svg?style=svg)](https://circleci.com/gh/danhead/personal-site/tree/master)

## About

My personal website ([https://danielhead.com](https://danielhead.com/)), built using
a [Node.js](https://nodejs.org/) backend with [Express](https://expressjs.com/)
and [pug](https://pugjs.org/api/getting-started.html) for templating. The CSS is
compiled at build time using [PostCSS](http://postcss.org/).

## Development

* Install dependencies: `npm install`
* Run: `npm start` to start the:
  * Node.js server, using nodemon for reloading
  * Browsersync server, to proxy the Node.js server
  * CSS watch task to lint and rebuild on change
  * JavaScript tests on change

## Testing

* Run `npm run css:lint` to test the CSS for linting errors
* Run `npm run jest` to test the JavaScript

Both tests are run automatically by the `npm start` script

## Production Build

The following steps will run a production serve on port 80:

* `export NODE_ENV=production`
* `export PORT=80`
* `npm run build`
* `node index.js`

## Docker image

A docker image is published to the [Docker Hub](https://hub.docker.com/r/suburbanme/personal-site/)
for every commit to the master branch, assuming all tests pass. This is run
automatically using [CircleCI](https://circleci.com/gh/danhead/personal-site/).
This docker image is then redeployed automatically.

A reference [Docker Compose](docker-compose.yml) file is also included, which
provides SSL termination using NGINX and Letsencrypt.
