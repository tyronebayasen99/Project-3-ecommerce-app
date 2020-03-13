const jwt = require("jsonwebtoken");

const authMiddleware = function () {
    return function (req, res, next) {
        const token = req.body.token;

        if (token) {
            try {
                const _id = jwt.verify(token, process.env.APP_SECRET)._id;

                req.user = _id;
            } catch (e) {

            }
        }
        next();
    };
};

module.exports = authMiddleware;