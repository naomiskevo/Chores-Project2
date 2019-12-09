const Lady = require('../models/lady');
const Chore = require('../models/chore');

module.exports = {
    delete: deleteChore,
    updateChore,
    update
}
function update(req, res) {
    Chore.findById(req.params.id, function (err, chore) {
         res.render('ladies/update', {
             user: req.user,
             chore,
          
         })
     })
 }
 function updateChore(req, res) {
    Chore.findById(req.params.id, function (err, chores) {
         chores.chore = req.body.chore
         chores.progress = req.body.progress
         chores.save(function (err) {
             if (err) return res.render('/error');
             res.render('/ladies', {
                user: req.user,
                chores,
            
             });
         })
     })
 }

function deleteChore(req,res){
    Chore.findByIdAndDelete(req.params._id, function(err, chore){
        res.redirect('/ladies')
    })
}
