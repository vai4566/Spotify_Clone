const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

    // Get token from cookie
    const token = req.cookies.token;

    // No token = not logged in
    if (!token) {
        return res.status(401).json({
            message: "You are not logged in"
        });
    }

    try {

        // Verify token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // Store user id in request
        req.userId = decoded.userId;

        // User is logged in
        next();

    } catch (error) {

        return res.status(401).json({
            message: "You are not logged in"
        });
    }
};

module.exports = authMiddleware;