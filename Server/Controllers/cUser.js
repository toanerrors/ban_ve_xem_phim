const User = require('../models/mUser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.user_create = function(req, res, next) {
    User.findOne({
        email: req.body.email
    }, function(err, user) {
        if (err) {
            return next(err);
        }
        if (user) {
            return res.status(422).send({
                message: 'Email đã tồn tại'
            });
        }
        bcrypt.hash(req.body.password, 10, function(err, hash) {
            if (err) {
                return next(err);
            }
            var user = new User({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                address: req.body.address,
                role: req.body.role,
                password: hash
            });
            user.save(function(err) {
                if (err) {
                    return next(err);
                }
                const token = jwt.sign({
                    data: user
                }, process.env.SECRET_KEY);
                res.status(201).send({
                    message: 'Tạo tài khoản thành công',
                    data: user,
                    token: token
                });
            });
        });
    });
};

exports.user_login = function(req, res, next) {
    User.findOne({
        email: req.body.email
    }, function(err, user) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(422).send({
                message: 'Email không tồn tại'
            });
        }
        bcrypt.compare(req.body.password, user.password, function(err, isMatch) {
            if (err) {
                return next(err);
            }
            if (!isMatch) {
                return res.status(422).send({
                    message: 'Mật khẩu không đúng'
                });
            }
            const token = jwt.sign({
                data: user
            }, process.env.SECRET_KEY);
            res.status(200).send({
                message: 'Đăng nhập thành công',
                data: user,
                token: token
            });
        });
    });
};

exports.user_update = function(req, res, next) {
    User.findById(req.body._id, function(err, user) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(422).send({
                message: 'Không tìm thấy user'
            });
        }
        user.name = req.body.name;
        user.email = req.body.email;
        user.phone = req.body.phone;
        user.address = req.body.address;
        user.save(function(err) {
            if (err) {
                return next(err);
            }
            res.status(200).send({
                message: 'Cập nhật thành công',
                data: user
            });
        });
    });
}