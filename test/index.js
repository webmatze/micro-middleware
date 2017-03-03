const { expect, MickrigTestCase } = require('mickrigtest')
const { applyMiddleware } = require('../dist/micro-middleware.js')

testcase = new MickrigTestCase("micro-middleware")
testcase.test("should apply empty middleware", async function() {
    let middleware = []
    let req = { request: true }
    let res = { response: true }

    let myApp = async (req, res) => 
        "hello world"
    let app = applyMiddleware(myApp, middleware)
    let result = await app(req, res)
    expect(result).to().be("hello world")
})

const messages = testcase.run();
messages.forEach(function(m){console.log(m)})