const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ladySchema = new Schema({
    name: String,
    email: String,
    chores: [{
        type: Schema.Types.ObjectId,
        ref: 'Chore'
    }],
    googleId: String
});

module.exports = mongoose.model('Lady', ladySchema);