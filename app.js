const express = require('express')
const bodyParser = require('body-parser')
// const psql = require('./db')

const  jobs  = require('./models/jobs')
// import jobs from './models/jobs'

require('dotenv').config()

const app = express()
const PORT = process.env.PORT

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
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routing
app.get('/', (req,res) => {
  res.render('index')
})

app.post('/search', (req,res) => {
  // psql.query(`SELECT * FROM ${req.body.table}`, (err, response) => {
  //   if(err) {
  //       console.log(err)
  //   }
  //   else {
  //       console.log(response.rows[2])
  //       // let pass = response.rows[2].job_id
  //       // console.log(pass)
  //       // res.render('index', { response.rows[2] })

  //       // let word = jobs.job({ response })
  //       // let word = jobs.job('curd','bread','sandwich')
  //       // console.log(word)
  //   }
  //   // psql.end()
  // })

  psql.query(`SELECT * FROM ${req.body.table}`) 
    .then(result => {
      console.log(result.rows)
      res.render('index', {bingus: result.rows} )
    })
    .catch(err => {
      console.log(err)
    })
})

app.get('/add', (req,res) => {
  res.render('add')
})

app.post('/add-job', (req,res) => {
  res.send(req.body.jobTitle)
})

app.get('/about', (req,res) => {
  res.render('about')
})

app.listen(PORT, () => { 
  console.log(`Server running on port: http://localhost:${PORT}`) 
})