const express = require('express')
const app = express()
const cors = require('cors')
const mainRouter = require('./router/mainRouter')

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Edvinas:ceika920915smKA1@cluster0.5wt9e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(() => {
    console.log("database connection ok")
})


app.use(express.json())
app.use(cors())
app.listen(4000)

app.use('/', mainRouter)

