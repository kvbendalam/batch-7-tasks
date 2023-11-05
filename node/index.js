const http = require('http')

const server = http.createServer(handleRoot)

function handleRoot(request, response) {
    response.end("Hello")
}

server.listen(3001, () => {
    console.log("Server is running!")
})