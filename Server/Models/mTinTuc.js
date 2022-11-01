const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tinTucSchema = new Schema({
    tieuDe: {
        type: String,
        required: true
    },
    noiDung: {
        type: String,
        required: true
    },
    hinhAnh: {
        type: String,
        required: true
    },
    create_at: {
        type: Date,
        default: Date.now
    },
    update_at: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('TinTuc', tinTucSchema);