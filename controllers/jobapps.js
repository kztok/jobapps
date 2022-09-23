const Jobapps = require('./../models/jobapps')

module.exports = {

    get(req,res) {
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
    },

    getDetails(req,res) {
        Jobapps.getDetails(req.params.id)
            .then(result => {
                res.render('details', { details: result.rows[0] })
            })
            .catch(err => {
                console.log(err)
            })
    },

    post(req,res) {
        Jobapps.post(req.body)
            .then(result => {
                res.redirect('/jobapps')
            })
            .catch(err => {
                console.log(err)
            })
    },

    patch(req,res) {
        const id = req.params.id
        Jobapps.patch(id, req.body)
            .then(result => {
                res.json({ redirect: `/jobapps/${ id }` })
            })
            .catch((err) => {
                console.error(err)
            })
    },

    delete(req,res) {
        Jobapps.delete(req.params.id)
            .then(result => {
                res.json({ redirect: '/jobapps' })
            })
            .catch(err => {
                console.log(err)
            })
    }
}