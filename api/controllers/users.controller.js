const db = require('../db');
const jwtHelper = require('../shared/jwt/index')

class UserController {
    async getAll() {
        try {
            let result = await db.users.findAll();
            result = JSON.parse(JSON.stringify(result));
            return result;;
        }
        catch (err) {
            throw err;
        }
    }

    async getById(id) {
        try {
            let result = await db.users.findOne({
                where: { id: id }
            });
            result = JSON.parse(JSON.stringify(result));
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    async creatOne(user) {
        try {
            let checker = await db.users.findOne({
                where: {
                    name: user.name,
                }
            })

            if (checker != null) {
                return 'something wrong';
            }
            else {
                let result = await db.users.create(user);
                result = JSON.parse(JSON.stringify(result));
                return result;
            }
        }
        catch (err) {
            throw err;
        }
    }

    async login(email, password) {
        try {
            const result = await db.users.findOne({
                attributes: ["id", "name", "linkImg", "status"],
                where: {
                    email: email,
                    password: password,
                }
            });
            const user = JSON.parse(JSON.stringify(result));
            if (!user) {
                return "not exist user";
            }
            else {
                const u = {
                    uid: user.id
                };
                const token = jwtHelper.setToken(u)
                u.token = token;
                return u;
            }
        }
        catch (err) {
            throw err;
        }
    }
}

module.exports = new UserController();