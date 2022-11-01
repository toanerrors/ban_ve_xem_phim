const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rapSchema = new Schema({
    tenRap: {
        type: String,
        required: true
    },
    diaChi: {
        type: String,
        required: true
    },
    soDienThoai: {
        type: String,
        required: true
    },
    viTri: {
        type: String,
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

module.exports = mongoose.model('Rap', rapSchema);