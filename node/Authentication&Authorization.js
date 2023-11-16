const express = require('express')
const jwt = require('jsonwebtoken')

const app = express();

app.use(express.json())

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const payload = { data: username }
    const secret = "asdjkfasldkjfl23434jklsjflkdjfldkfjlkjlkjsalkdjfldk"

    const token = jwt.sign(payload, secret)

    res.json({ token: token })

})

const course = [
    {
        "id": 1,
        "name": "Fullstack",
        "author": "Krishna"
    },
    {
        "id": 2,
        "name": "Frontend",
        "author": "Krishna"
    },

    {
        "id": 3,
        "name": "Backend",
        "author": "Vamsi"
    },

    {
        "id": 1,
        "name": "Mobile",
        "author": "Vamsi"
    }
]

app.get("/course", verifyToken, (req, res) => {
    res.json(course)
})


function verifyToken(req, res, next) {
    const token = req.headers['authorization']
    const secret = "asdjkfasldkjfl23434jklsjflkdjfldkfjlkjlkjsalkdjfldk"
    jwt.verify(token, secret, (err, payload) => {
        if (err) {
            return res.sendStatus(403)
        }
        req.payload = payload
    })

    next()
}

app.listen(3000, () => {
    console.log("Server is running...")
})