require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const routes_jobapps = require('./routes/jobapps')
// import jobs from './models/jobs'

const app = express()
const PORT = process.env.PORT

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'pug')

// middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// routing
routes_jobapps(app)

app.listen(PORT, () => { 
  console.log(`Server running on port: http://localhost:${PORT}`) 
})