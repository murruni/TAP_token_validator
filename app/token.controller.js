const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'Klave muy secreT4';

exports.validate = (req, res, next) => {
    var token = req.headers['authorization'];
    if (!token) {
        res.status(400).send({ error: "Authentication token is required" })
        return;
    };

    token = token.replace('Bearer ', '');

    jwt.verify(token, secret, function (err, user) {
        if (err) {
            res.status(401).send({ error: 'Invalid Token' })
        } else {
            user.admin = false;
            if (user.sub == 'admin') {
                user.admin = true;
            }
            res.status(200).send(user);
        }
    });
};