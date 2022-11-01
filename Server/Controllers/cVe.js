const Ve = require('../models/mVe');
const Ghe = require('../models/mGhe');

exports.ve_create = function(req, res, next) {
    const { idPhim, idRap, dsghe, idUser, lichChieu } = req.body;
    if(!idPhim || !idRap || !dsghe || !idUser || !lichChieu) {
        res.status(500).json({
            success: false,
            message: 'Thiếu thông tin'
        });
        return;
    }

    const tongtien = dsghe.length * 75000;
    const ve = new Ve({
        idPhim: req.body.idPhim,
        idRap: req.body.idRap,
        dsghe,
        idUser: req.body.idUser,
        lichChieu: req.body.lichChieu,
        tongtien: tongtien,
        tenPhim: req.body.tenPhim,
        tenRap: req.body.tenRap
    });
    ve.save(function(err, ve) {
        if(err) {
            res.status(500).json({
                success: false,
                message: 'Thêm vé thất bại',
                err: err
            });
        } else {
            Ghe.find({idPhim: req.body.idPhim}, function(err, ghe) {
                if(err) {
                    res.status(500).json({
                        success: false,
                        message: 'Lấy danh sách ghế thất bại',
                        err: err
                    });
                } else {
                    for(var i = 0; i < ghe.length; i++) {
                        for(var j = 0; j < dsghe.length; j++) {
                            if(ghe[i].maGhe === dsghe[j]) {
                                ghe[i].trangThai = 'Đã đặt';
                                ghe[i].save();
                            }
                        }
                    }
                    
                    res.status(200).json({
                        success: true,
                        message: 'Thêm vé thành công',
                        data: ve,
                    });
                }
            });
        }
    });
};

exports.ve_get_by_idUser = function(req, res, next) {
    Ve.find({idUser: req.params.idUser}, function(err, ve) {
        if(err) {
            res.status(500).json({
                success: false,
                message: 'Lấy danh sách vé thất bại',
                err: err
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Lấy danh sách vé thành công',
                data: ve
            });
        }
    });
};