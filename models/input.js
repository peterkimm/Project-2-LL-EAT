const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inputSchema = new Schema({
    name: String,
    food: String,
    time: String,
    location: String
}, {
    timestamps: true
});

const Input = mongoose.model('Input', inputSchema);

module.exports = Input;