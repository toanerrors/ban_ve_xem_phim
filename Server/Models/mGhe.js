const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gheSchema = new Schema({
    maGhe: {
        type: String,
        required: true
    },
    trangThai: {
        type: String,
        default: 'Trống',
        enum: ['Trống', 'Đã đặt', 'Đã đặt và đã thanh toán'],
        required: true
    },
    idPhim: {
        type: String,
        unique: true,
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

module.exports = mongoose.model('Ghe', gheSchema);