const mongoose = require('mongoose');


const choreSchema = new mongoose.Schema({
    chore: {
        type: String
    },
    choreDescription: {
        type: String
    },
    progress: {
        type: String,
        enum: ['Done', 'Will do tonight', 'Will do by EOW', 'Fuck off'],
        defaule: 'Will do by EOW'
    } 
});


const ladySchema = new mongoose.Schema({
    name: String,
    email: String,
    chores: [choreSchema],
    googleId: String
});

module.exports = mongoose.model('Lady', ladySchema);