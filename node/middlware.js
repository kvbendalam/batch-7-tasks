const express = require('express')
const { globalAgent } = require('http')

const app = express()

app.use(globalMiddleware)

app.get("/", sayHello, sayHi)


function globalMiddleware(req, res) {
    console.log("This is global middle ware")
}

function sayHello(req, res, next) {
    console.log("Hello")
    req.value = "Value from Hello function"
    next()
}

function sayHi(req, res) {
    console.log(req.value)
    res.send("Hi function")
}

app.listen(3000, () => {
    console.log("Server is running...")
})