const Jobapps = require('./../models/jobapps')

module.exports = {

    getHome(req,res) {
        res.redirect('/jobapps')
    },
    
    getHomepage(req,res) {
        Jobapps.get()
            .then(result => {
                res.render('index', { jobs: result.rows })
            })
            .catch(err => {
                console.log(err)
            })
    }
}