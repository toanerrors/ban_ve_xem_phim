const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phongchieuSchema = new Schema({
    maPhong: {
        type: String,
        unique: true,
        required: true
    },
    trangThai: {
        type: String,
        default: 'Đang sử dụng',
        enum: ['Đang sử dụng', 'Trống'],
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

module.exports = mongoose.model('PhongChieu', phongchieuSchema);
        