const { expect, MickrigTestCase } = require('mickrigtest')
const { applyMiddleware } = require('../dist/micro-middleware.js')

const req = { request: true }
const res = { response: true }

const myApp = async (req, res) => 
    "hello world"

testcase = new MickrigTestCase("micro-middleware")
testcase.test("should apply undefined middleware", async function() {
    let app = applyMiddleware(myApp)
    let result = await app(req, res)
    expect(result).to().be("hello world")
})
testcase.test("should apply empty middleware", async function() {
    let middleware = []
    let app = applyMiddleware(myApp, middleware)
    let result = await app(req, res)
    expect(result).to().be("hello world")
})
testcase.test("should apply simple middleware", async function() {
    const universe = fn => async function process (...args) {
        let data = await fn.apply(null, args)
        return data.replace(/world/, 'universe')
    }
    let middleware = [universe]
    let app = applyMiddleware(myApp, middleware)
    let result = await app(req, res)
    expect(result).to().be("hello universe")
})

const messages = testcase.run();
messages.forEach(function(m){console.log(m)})
