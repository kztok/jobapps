const controller_jobapps = require('./../controllers/jobapps')

module.exports = app => {
    app.get('/', controller_jobapps.get)
    app.get('/jobapps', controller_jobapps.getHome)
    app.get('/jobapps/:id', controller_jobapps.getDetails)
    app.get('/add', controller_jobapps.getAdd)
    app.post('/', controller_jobapps.post)
    app.patch('/jobapps/:id', controller_jobapps.patch)
    app.delete('/jobapps/:id', controller_jobapps.delete)
    app.get('/about', controller_jobapps.getAbout)
}