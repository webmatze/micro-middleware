'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function applyMiddleware(service) {
  var middleware = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  return middleware.reduce(function (fn, nextMiddleware) {
    return nextMiddleware(fn);
  }, service);
}

exports.applyMiddleware = applyMiddleware;
