const Lady = require('../models/lady');

module.exports = {
    index,
    create,
    show

}

function show (req, res) {
    Lady.findById(req.params.id, function(err, lady){
        res.render('ladies/show', {
            title: "User's Chores",
            lady,
        });
    })
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
        res.render('ladies/index', {title: 'Ladies of 8605', ladies});
    });
}