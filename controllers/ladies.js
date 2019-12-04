const Lady = require('../models/lady');

module.exports = {
    index,
    create
}

function create(req, res){
    Lady.findById(req.params.id, function(err, lady){
        lady.chores.push(req.body)
        lady.save(function(err){
            res.redirect(`/ladies/${lady._id}`)
        })
    })
}

function index(req, res){
    Lady.find({}, (err, ladies) => {
        res.render('ladies/index', {title: 'Household Chores', ladies});
    });
}