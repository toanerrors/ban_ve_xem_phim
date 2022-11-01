const TinTuc = require('../Models/mTinTuc.js');

exports.getAll = (req, res) => {
    TinTuc.find({}, (err, data) => {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Tin tức đã được lấy thành công",
            data: data
        });
    });
};

exports.tintucCreate = (req, res) => {
    let newTinTuc = new TinTuc({
        tieuDe: req.body.tieuDe,
        noiDung: req.body.noiDung,
        hinhAnh: req.body.hinhAnh,
    });

    newTinTuc.save((err, data) => {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Tin tức đã được thêm thành công",
            data: data
        });
    });
};

exports.tintucUpdate = (req, res) => {
    TinTuc.findByIdAndUpdate(req.params.id, {
        tieuDe: req.body.tieuDe,
        noiDung: req.body.noiDung,
        hinhAnh: req.body.hinhAnh,
    }, (err, data) => {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Tin tức đã được cập nhật thành công",
            data: data
        });
    });
};

exports.tintucDelete = (req, res) => {
    TinTuc.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Tin tức đã được xóa thành công",
            data: data
        });
    });
}

exports.getTinTucById = (req, res) => {
    TinTuc.findById(req.params.id, (err, data) => {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Tin tức đã được lấy thành công",
            data: data
        });
    });
}
