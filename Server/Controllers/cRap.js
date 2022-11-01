const Rap = require('../models/mRap.js');

exports.rap_get_all = function(req, res, next) {
    Rap.find({}, function(err, raps) {
        if(err) {
            res.status(500).json({
                success: false,
                msg: 'Lấy danh sách rạp thất bại',
                err: err
            });
        } else {
            res.status(200).json({
                success: true,
                msg: 'Lấy danh sách rạp thành công',
                data: raps
            });
        }
    })
};

exports.rap_get_by_id = function(req, res, next) {
    Rap.findById(req.params.id, function(err, rap) {
        if(err) {
            res.status(500).json({
                success: false,
                msg: 'Lấy thông tin rạp thất bại',
                err: err
            });
        } else {
            res.status(200).json({
                success: true,
                msg: 'Lấy thông tin rạp thành công',
                data: rap
            });
        }
    });
};

exports.rap_create = function(req, res, next) {
    let newRap = new Rap({
        tenRap: req.body.tenRap,
        diaChi: req.body.diaChi,
        soDienThoai: req.body.soDienThoai,
        viTri: req.body.viTri
    });

    newRap.save(function(err, rap) {
        if(err) {
            res.status(500).json({
                success: false,
                msg: 'Thêm rạp thất bại',
                err: err
            });
        } else {
            res.status(200).json({
                success: true,
                msg: 'Thêm rạp thành công',
                data: rap
            });
        }
    });
};

exports.rap_update = function(req, res, next) {
    Rap.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, rap) {
        if(err) {
            res.status(500).json({
                success: false,
                msg: 'Cập nhật rạp thất bại',
                err: err
            });
        } else {
            res.status(200).json({
                success: true,
                msg: 'Cập nhật rạp thành công',
                data: rap
            });
        }
    });
};

exports.rap_delete = function(req, res, next) {
    Rap.findByIdAndRemove(req.params.id, function(err, rap) {
        if(err) {
            res.status(500).json({
                success: false,
                msg: 'Xóa rạp thất bại',
                err: err
            });
        } else {
            res.status(200).json({
                success: true,
                msg: 'Xóa rạp thành công',
                data: rap
            });
        }
    });
};