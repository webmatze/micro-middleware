'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function applyMiddleware(service, middleware = []) {
  return middleware.reduce((fn, nextMiddleware) => nextMiddleware(fn), service);
}

exports.applyMiddleware = applyMiddleware;
