const express = require('express')

const app = express()


app.get("/", handleInfo)
app.get("/course", handleCourse)


function handleInfo(request, response) {
    response.send("Root method")
}

const course = {
    id: 1,
    name: "full stack",
    price: 5000
}

function handleCourse(request, response) {
    // response.writeHead(200, { 'content-Type': "application/json" })
    response.send(JSON.stringify(course))
}


app.listen(3000, () => {
    console.log("Server is running!")
})
