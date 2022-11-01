const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phimSchema = new Schema({
    tenPhim: {
        type: String,
        required: true
    },
    daoDien: {
        type: String
    },
    dienVien: {
        type: String
    },
    theLoai: {
        type: String
    },
    ngayKhoiChieu: {
        type: Date,
        required: true,
        default: Date.now
    },
    thoiLuong: {
        type: Number,
        required: true
    },
    moTa: {
        type: String
    },
    hinhAnh: {
        type: String,
        required: true
    },
    danhGia: {
        type: Number
    },
    nhaSanXuat: {
        type: String
    },
    namSanXuat: {
        type: Number
    },
    trangThai: {
        type: String,
        default: 'Sắp ra mắt',
        enum: ['Đang khởi chiếu', 'Sắp ra mắt', 'Đã kết thúc'],
        required: true
    },
    trailer: {
        type: String
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

module.exports = mongoose.model('Phim', phimSchema);