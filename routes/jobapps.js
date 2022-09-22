const controller_jobapps = require('./../controllers/jobapps')

module.exports = app => {
    app.get('/', controller_jobapps.getHome)
    app.get('/jobapps', controller_jobapps.getHomepage)
}