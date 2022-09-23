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

Jobapps.getDetails = (id) => {
    const index = 'jobs'
    return psql.query(`SELECT * FROM ${ index } WHERE job_id = ${ id }`)
}

Jobapps.post = (details) => {
    const index = 'jobs'
    return psql.query(`INSERT INTO jobs (job_title, city, state) 
    VALUES (
        '${ details.jobTitle }',
        '${ details.city }',
        '${ details.state}'
    )`)
}

Jobapps.patch = (id,details) => {
    const index = 'jobs'
    async function updateDB() {
        for (const [key, value] of Object.entries(details)) {
            if(value) {
            psql.query(`UPDATE ${ index } SET ${ key } = '${ value }' WHERE job_id = ${ id }`)
    }}}
    return updateDB()
}

Jobapps.delete = (id) => {
    const index = 'jobs'
    return psql.query(`DELETE FROM ${ index } WHERE job_id = ${ id }`)
}


module.exports = Jobapps