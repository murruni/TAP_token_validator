const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || 'Klave muy secreT4';
const ErrorHandler = require('../utils/error');

exports.validate = (req, res, next) => {
    var token = req.headers['authorization'];
    if (!token)
        return next(new ErrorHandler(400, 'Authentication token is required'));

    token = token.replace('Bearer ', '');

    jwt.verify(token, SECRET, function (err, user) {
        if (err)
            return next(new ErrorHandler(401, 'Token de inválido'));

        user.admin = false;
        if (user.sub == 'admin')
            user.admin = true;

        res.status(200).send(user);
    });
};