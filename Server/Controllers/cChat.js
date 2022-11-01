const mChat = require('../models/mChat');

exports.chat_create = function(res, req) {
    var newChat = new mChat({
        message: res.message,
        idUser: res.idUser,
        user: res.user
    });

    if(!newChat.idUser || !newChat.message || !newChat.user) {
        console.log('errr');
        return;
    }
    newChat.save();
}

//get 100 message
exports.chat_get_all = function(req, res, next) {
    mChat.find({}, function(err, chats) {
        if(err) {
            res.status(500).json({
                success: false,
                message: 'Lấy danh sách chat thất bại',
                err: err
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Lấy danh sách chat thành công',
                data: chats,
            });
        }
    });
};