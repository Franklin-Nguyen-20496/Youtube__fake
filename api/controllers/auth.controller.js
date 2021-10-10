const db = require('../db');

class AuthController {
    async findOne() {
        try {
            let result = await db.auths.findOne({
                where: {
                    id: 9,
                }
            })
            return result;
        }
        catch (err) {
            throw err;
        }
    }
}

module.exports = new AuthController();
