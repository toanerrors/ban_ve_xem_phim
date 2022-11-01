const Ghe = require('../models/mGhe');

exports.ghe_get_by_idPhim = function(req, res, next) {
    Ghe.find({idPhim: req.params.idPhim}, function(err, ghe) {
        if(err) {
            res.status(500).json({
                success: false,
                message: 'Lấy danh sách ghế thất bại',
                err: err
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Lấy danh sách ghế thành công',
                data: ghe
            });
        }
    });
};

exports.ghe_update_by_idPhim = function(req, res, next) {
    Ghe.find({idPhim: req.params.idPhim}, function(err, ghe) {
        if(err) {
            res.status(500).json({
                success: false,
                message: 'Lấy danh sách ghế thất bại',
                err: err
            });
        } else {
            for(var i = 0; i < ghe.length; i++) {
                if(ghe[i].idGhe == req.params.idGhe) {
                    ghe[i].trangThai = req.body.trangThai;
                    ghe[i].save();
                }
            }
            res.status(200).json({
                success: true,
                message: 'Cập nhật ghế thành công',
                data: ghe
            });
        }
    });
};

exports.ghe_reset_by_idPhim = function(req, res, next) {
    Ghe.find({idPhim: req.params.idPhim}, function(err, ghe) {
        if(err) {
            res.status(500).json({
                success: false,
                message: 'Lấy danh sách ghế thất bại',
                err: err
            });
        } else {
            for(var i = 0; i < ghe.length; i++) {
                ghe[i].trangThai = 'Trống';
                ghe[i].save();
            }
            res.status(200).json({
                success: true,
                message: 'Cập nhật ghế thành công',
                data: ghe
            });
        }
    });
};

exports.ghe_delete_by_maPhim = function(req, res, next) {
    Ghe.findByIdAndRemove(req.params.maPhim, function(err, ghe) {
        if(err) {
            res.status(500).json({
                success: false,
                msg: 'Xóa ghế thất bại',
                err: err
            });
        } else {
            res.status(200).json({
                success: true,
                msg: 'Xóa ghế thành công',
                data: ghe
            });
        }
    });
};