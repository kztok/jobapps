require('dotenv').config()

const { Client } = require('pg')

const psql = new Client ({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DBPORT
})

psql.connect()

// client.query(`INSERT INTO jobs VALUES (1,'test','nm','nh')`, (err, res) => {
//     if(err) {
//         console.log(err)
//     }
//     else {
//         console.log(res)
//     }
//     client.end()
// })

let jobs = 'jobs'

psql.query(`SELECT * FROM ${jobs}`, (err, res) => {
    if(err) {
        console.log(err)
    }
    else {
        console.log(res.rows[0])
    }
    psql.end()
})
