const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const veSchema = new Schema({
    idPhim: {
        type: String,
        required: true
    },
    idRap: {
        type: String,
        required: true
    },
    dsghe: {
        type: Object,
        required: true
    },
    idUser: {
        type: String,
        required: true
    },
    lichChieu: {
        type: String,
        required: true
    },
    tenPhim: {
        type: String,
        required: true
    },
    tenRap: {
        type: String,
        required: true
    },
    tongtien: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Ve', veSchema);