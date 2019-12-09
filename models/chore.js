const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const choreSchema = new Schema({
    chore: {
        type: String
    },
    progress: {
        type: String,
        enum: ["Done", "Will do tonight", "Will do by EOW"]
    } 
});

module.exports = mongoose.model('Chore', choreSchema);