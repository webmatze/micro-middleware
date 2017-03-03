# micro-middleware

> a simple helper to add middleware to your zeit/micro service

This will become a set of simple helpers to create and apply middleware to your microsevices using [Zeit](https://zeit.co/)'s [micro](https://github.com/zeit/micro) framework.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i micro-middleware --save-dev
```

## Usage

```js
// require micro-middleware helper
var { applyMiddleware } = require('micro-middleware')

// require some middleware for micro
const cors = require('micro-cors')()
const compress = require('micro-compress')
const middleware = [
  cors, 
  compress
]

// create your micro service
const microService = async (req, res) => {
    return "hello world"
}

// apply middleware and export
module.exports = applyMiddleware(microService, middleware)
```

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/webmatze/micro-middleware/issues)

## Author

**Mathias Karstädt**

* [github/webmatze](https://github.com/webmatze)
* [twitter/webmatze](http://twitter.com/webmatze)

## License

Copyright © 2017 [Mathias Karstädt](http://mathiaskarstaedt.de/)
Licensed under the MIT license.

***

_This file was generated by [readme-generator](https://github.com/jonschlinkert/readme-generator) on March 03, 2017._
