const { Client } = require('pg')
const psql = new Client ({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DBPORT
})
psql.connect()

const Jobapps = {}

Jobapps.get = () => {
    const index = 'jobs'
    return psql.query(`SELECT * FROM ${ index }`) 
}

module.exports = Jobapps