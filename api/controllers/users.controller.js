const db = require('../db');

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

    async findOneAccount(user) {
        try {
            let result = await db.users.findOne({
                where: {
                    name: user.name,
                    password: user.password,
                }
            });

            if (result === null) {
                return 'no account found';
            }
            else {
                const data = {
                    authorId: result.id,
                    name: result.name,
                    linkImg: result.linkImg,
                    password: result.password,
                    status: result.status,
                }
                await db.auths.update(data, {
                    where: {
                        id: 9,
                    }
                })
                console.log('data', data);
                result = JSON.parse(JSON.stringify(result));
                return result;
            }
        }
        catch (err) {
            throw err;
        }
    }
}

module.exports = new UserController();