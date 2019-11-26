const mongoose = require('mongoose');


const choreSchema = new mongoose.Schema({
    text: String
}, {
    timestamps: true

});


const ladySchema = new mongoose.Schema({
    name: String,
    email: String,
    chores: [choreSchema],
    googleId: String
});

module.exports = mongoose.model('Lady', ladySchema);