const mentorRoute = require('./routes/mentor')
const studentRoute = require('./routes/student')

const express = require('express')
const app = express()

const cors = require('cors')

require('dotenv').config()

const connectDB = require('./config/db')
connectDB()

//Middleware
app.use(cors())
app.use(express.json())

app.use('/Mentors', mentorRoute)
app.use('/Student', studentRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server Up and Running")
})
