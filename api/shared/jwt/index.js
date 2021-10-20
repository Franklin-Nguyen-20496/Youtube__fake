const jwt = require('jsonwebtoken');
const config = require('config');

class jwtHelper {
    setToken(user) {
        return jwt.sign(user, config.PRIVATE_KEY, {
            expiresIn: config.TOKEN_EXPIRESIN
        })
    }

    verifyToken(token) {
        if (!token) return false
        try {
            const decoded = jwt.verify(token, config.PRIVATE_KEY)
            if (!decoded) {
                return false
            }
            return decoded;
        } catch (error) {
            return false
        }
    }
}

module.exports = new jwtHelper();