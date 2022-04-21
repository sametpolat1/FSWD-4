// node-express snippet
const express = require('express')
const db = require("./db")()
const usersRouter = require('./controllers/user.controller')



const app = express()
const port = 3000


app.use('/api/users', usersRouter);



app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;