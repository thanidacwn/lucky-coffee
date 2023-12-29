const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const verifyTokenHandler = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    if (authHeader && authHeader.startsWith('Bearer')) {
        try {
            token = authHeader.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET, {
                algorithm: process.env.JWT_ALGORITHM
            });
            req.username = decoded;
            next();
        } catch (error) {
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    }
    else {
        res.status(401);
        throw new Error('Not authorized, no token');
    }

});

module.exports = { verifyTokenHandler };