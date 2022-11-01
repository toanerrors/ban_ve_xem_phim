const jwt = require('jsonwebtoken');

module.exports.requireAuth = async (req, res, next) => {
    const authorizationHeader = req.headers['authorization'];
    if(!authorizationHeader) {
        return res.status(401).send({
            message: 'Bạn chưa đăng nhập'
        });
    }

    const token = authorizationHeader.split(' ')[1];
    if(!token) {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }

    try {
        const decoded = await jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded.data;
        next();
    } catch (err) {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }

}

module.exports.requireAdmin = async (req, res, next) => {
    const authorizationHeader = req.headers['authorization'];
    if(!authorizationHeader) {
        return res.status(401).send({
            message: 'Bạn chưa đăng nhập'
        });
    }

    const token = authorizationHeader.split(' ')[1];
    if(!token) {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }

    try {
        const decoded = await jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded.data;
        if(req.user.role !== 'admin') {
            return res.status(403).json({
                message: 'Bạn không có quyền truy cập'
            });
        }
        next();
    } catch (err) {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }

}


