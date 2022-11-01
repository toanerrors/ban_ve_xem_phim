const Phim = require('../models/mPhim');
const Ghe = require('../models/mGhe');
const Rap = require('../models/mRap');

exports.phim_create = function(req, res, next) {
    let phim = new Phim({
        tenPhim: req.body.tenPhim,
        daoDien: req.body.daoDien,
        dienVien: req.body.dienVien,
        theLoai: req.body.theLoai,
        ngayKhoiChieu: req.body.ngayKhoiChieu,
        thoiLuong: req.body.thoiLuong,
        moTa: req.body.moTa,
        hinhAnh: req.body.hinhAnh,
        trangThai: req.body.trangThai,
        nhaSanXuat: req.body.nhaSanXuat,
        namSanXuat: req.body.namSanXuat,
        danhGia: req.body.danhGia,
        trailer: req.body.trailer
    });

    Phim.findOne({tenPhim: req.body.tenPhim}, function(err, phim) {
        if (err) {
            return next(err);
        }
        if (phim) {
            return res.status(400).send({
                message: 'Phim đã tồn tại'
            });
        }
    });

    phim.save(function(err) {
        if(err) {
            res.status(500).json({
                success: false,
                message: 'Tạo phim thất bại',
                err: err
            });
        } else {
            res.status(201).json({
                success: true,
                message: 'Tạo phim thành công',
                data: phim
            });

            let hang = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            let cot = [1,2,3,4,5,6,7,8,9,10];

            for(let i = 0; i < hang.length; i++) {
                for(let j = 0; j < cot.length; j++) {
                    const ghe = new Ghe({
                        maGhe: hang[i] + cot[j],
                        idPhim: phim._id,
                        trangThai: 'Trống'
                    });
                    ghe.save();
                }
            }
        }
    })
};

exports.phim_get_all = function(req, res, next) {
    Phim.find({}, function(err, phims) {
        if(err) {
            res.status(500).json({
                success: false,
                message: 'Lấy danh sách phim thất bại',
                err: err
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Lấy danh sách phim thành công',
                data: phims,
            });
        }
    });
};

exports.phim_get_by_id = function(req, res, next) {
    Phim.findById(req.params.id, function(err, phim) {
        if(err) {
            res.status(500).json({
                success: false,
                message: 'Lấy phim thất bại',
                err: err
            });
        } else {
            Ghe.find({idPhim: phim._id}, function(err, ghes) {
                if(err) {
                    res.status(500).json({
                        success: false,
                        message: 'Lấy danh sách ghế thất bại',
                        err: err
                    });
                } else {
                    
                res.status(200).json({
                    success: true,
                    message: 'Lấy phim thành công',
                    data: {
                        phim: phim,
                        ghes: ghes
                    }
                });
                }
            });
        }
    });
};

exports.phim_update = function(req, res, next) {
    Phim.findById(req.params.id, (err, phim) => {
        if(err) {
            res.status(500).json({
                success: false,
                message: 'Cập nhật phim thất bại',
                err: err
            });
        } else {
            phim.tenPhim = req.body.tenPhim;
            phim.daoDien = req.body.daoDien;
            phim.dienVien = req.body.dienVien;
            phim.theLoai = req.body.theLoai;
            phim.ngayKhoiChieu = req.body.ngayKhoiChieu;
            phim.thoiLuong = req.body.thoiLuong;
            phim.moTa = req.body.moTa;
            phim.hinhAnh = req.body.hinhAnh;
            phim.trangThai = req.body.trangThai;
            phim.nhaSanXuat = req.body.nhaSanXuat;
            phim.namSanXuat = req.body.namSanXuat;
            phim.danhGia = req.body.danhGia;
            phim.trailer = req.body.trailer;
            phim.save(function(err) {
                if(err) {
                    res.status(500).json({
                        success: false,
                        message: 'Cập nhật phim thất bại',
                        err: err
                    });
                } else {
                    res.status(200).json({
                        success: true,
                        message: 'Cập nhật phim thành công',
                        data: phim
                    });
                }
            });
        }
    });
};

exports.phim_delete = function(req, res, next) {
    Phim.findByIdAndRemove(req.params.id, function(err, phim) {
        if(err) {
            res.status(500).json({
                success: false,
                message: 'Xóa phim thất bại',
                err: err
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Xóa phim thành công',
                data: phim
            });
            //delete ghe id phim
            Ghe.find({idPhim: req.params.id}, function(err, ghes) {
                if(err) {
                    res.status(500).json({
                        success: false,
                        message: 'Xóa ghế thất bại',
                        err: err
                    });
                } else {
                    for(let i = 0; i < ghes.length; i++) {
                        Ghe.findByIdAndRemove(ghes[i]._id);
                    }
                }
            });
        }
    });
};