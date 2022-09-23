require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const routes_jobapps = require('./routes/jobapps')
// import jobs from './models/jobs'

const app = express()
const PORT = process.env.PORT

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'pug')

// db
const { Client } = require('pg')
const psql = new Client ({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DBPORT
})
psql.connect()

// middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// routing
routes_jobapps(app)

app.get('/add', (req,res) => {
  res.render('add')
})

app.get('/about', (req,res) => {
  res.render('about')
})

app.listen(PORT, () => { 
  console.log(`Server running on port: http://localhost:${PORT}`) 
})