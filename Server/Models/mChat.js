const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    idUser: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Chat', chatSchema);
