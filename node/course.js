const http = require('http')

const server = http.createServer(handleCourse)

const course = [
    {
        id: 1,
        name: "Fullstack",
        price: "30000",
        duration: "3months",
        place: "Hyderbad"
    },
    {
        id: 2,
        name: "Fullstack",
        price: "30000",
        duration: "3months",
        place: "Hyderbad"
    },
    {
        id: 3,
        name: "Fullstack",
        price: "30000",
        duration: "3months",
        place: "Hyderbad"
    }
]


function handleCourse(req, res) {
    res.writeHead(200, { 'content-Type': "application/json" })
    res.end(JSON.stringify(course))
}

server.listen(3000, () => {
    console.log("Server is running!")
})