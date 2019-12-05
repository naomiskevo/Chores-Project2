const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const choreSchema = new Schema({
    chore: {
        type: String
    },
    progress: {
        type: String,
        enum: ["Done", "Will do tonight", "Will do by EOW"],
    } 
});


const ladySchema = new Schema({
    name: String,
    email: String,
    chores: [choreSchema],
    googleId: String
});

module.exports = mongoose.model('Lady', ladySchema);