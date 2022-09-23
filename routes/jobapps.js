const controller_jobapps = require('./../controllers/jobapps')

module.exports = app => {
    app.get('/', controller_jobapps.get)
    app.get('/jobapps', controller_jobapps.getJobs)
    app.get('/jobapps/:id', controller_jobapps.getDetails)
    app.post('/', controller_jobapps.post)
    app.patch('/jobapps/:id', controller_jobapps.patch)
    app.delete('/jobapps/:id', controller_jobapps.delete)
}