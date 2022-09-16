const express = require('express')
const bodyParser = require('body-parser')
// const psql = require('./db')

const jobs  = require('./models/jobs')
// import jobs from './models/jobs'

require('dotenv').config()

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
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routing
app.get('/', (req,res) => {
  res.redirect('/jobapps')
})

app.get('/jobapps', (req,res) => {
  const index = 'jobs'
  psql.query(`SELECT * FROM ${ index }`) 
    .then(result => {
      res.render('index', { jobs: result.rows })
    })
    .catch(err => {
      console.log(err)
    })
})

app.get('/jobapps/:id', (req,res) => {
  const id = req.params.id
  const index = 'jobs'
  psql.query(`SELECT * FROM ${ index } WHERE job_id = ${ id }`)
    .then(result => {
      res.render('details', { details: result.rows[0] })
    })
    .catch(err => {
      console.log(err)
    })
})

app.delete('/jobapps/:id', (req,res) => {
  const id = req.params.id
  const index = 'jobs'
  psql.query(`DELETE FROM ${ index } WHERE job_id = ${ id }`)
    .then(result => {
      res.json({ redirect: '/jobapps' })
    })
    .catch(err => {
      console.log(err)
    })
})

app.post('/', (req,res) => {
  psql.query(`INSERT INTO jobs (job_title, city, state) 
    VALUES (
    '${ req.body.jobTitle }',
    '${ req.body.city }',
    '${ req.body.state}'
    )`)
    .then(result => {
      res.redirect('/jobapps')
    })
    .catch(err => {
      console.log(err)
    })
})

app.get('/add', (req,res) => {
  res.render('add')
})

app.get('/about', (req,res) => {
  res.render('about')
})

app.post('/search', (req,res) => {
  // psql.query(`SELECT * FROM ${req.body.table}`) 
  //   .then(result => {
  //     console.log(req.body)
  //     console.log(req.body.table)

  //     // console.log(result.rows)
  //     res.render('index', {bingus: result.rows} )
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
})

app.listen(PORT, () => { 
  console.log(`Server running on port: http://localhost:${PORT}`) 
})