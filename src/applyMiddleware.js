export default function applyMiddleware (service, middleware=[]) {
  return middleware.reduce(
    (fn, nextMiddleware) => nextMiddleware(fn), 
    service
  )
}
