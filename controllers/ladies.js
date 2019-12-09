const Lady = require('../models/lady');
const Chore = require('../models/chore')


module.exports = {
    index,
    show,
    create
}




function create(req, res) {
    console.log(req.body)
    let chore = new Chore(req.body)
    chore.save(function (err, saved) {
        if (err){
            console.error('it is in the chore')
             throw new Error(err)
            }
            console.log(saved)
        Lady.findById(req.params.id, function (err, lady) {
            console.log(saved._id)
            console.log(lady)
            lady.chores.push(saved)
            // lady.chores = [saved, ...lady.chores] this is a way to make new array with a new item in the front without calling push()
            lady.save(function (err, saved) {
                if (err){
                    console.error('it is in the save')
                    throw new Error(err)
                   }
                console.log(saved)
                res.redirect(`/ladies/${lady._id}`)
            })
        });
    });
}

function show(req, res) {
    Lady.findById(req.params.id)
        .populate('chores').exec(function (err, lady) {
            res.render('ladies/show', {
                title: `${lady.name}'s Chores`,
                lady,
            });
        });
};

function index(req, res, next) {
    Lady.find({}, function (err, lady) {
        // console.log(lady)
        res.render('ladies/index', {
            title: 'Ladies of the 8605 Household',
            ladies: lady

        })
    })
};

