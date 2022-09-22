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

// module.exports = app => {
//     app.get('/', (req,res) => {
//         res.redirect('/jobapps')
//     })
      
//     app.get('/jobapps', (req,res) => {
//         const index = 'jobs'
//         psql.query(`SELECT * FROM ${ index }`) 
//             .then(result => {
//                 res.render('index', { jobs: result.rows })
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     })
// }

Jobapps.get = () => {
    const index = 'jobs'
    return psql.query(`SELECT * FROM ${ index }`) 
}

module.exports = Jobapps