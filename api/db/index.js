'use strict';
const dbConfig = require('../config/db.config');
const Sequelize = require('sequelize');
let sequelize = null;

class Db {
	constructor() {
		if (!sequelize) {
			sequelize = new Sequelize(
				dbConfig.DB,
				dbConfig.USER,
				dbConfig.PASSWORD,
				{
					host: dbConfig.HOST,
					dialect: dbConfig.dialect,
					operatorsAliases: false,
					pool: {
						max: dbConfig.pool.max,
						min: dbConfig.pool.max,
						acquire: dbConfig.pool.acquire,
						idle: dbConfig.pool.idle,
					}
				}
			);
		}
	}

	connect() {
		console.log("connect start");
		// console.log(sequelize);
		let connectPromise = sequelize
			.authenticate()
			.then(() => {
				console.log("sequelize authenticated");
				// return sequelize;
				return sequelize.sync() // {force: true} => reset DB
					.then(() => {
						console.log('sequelize synced');
						return sequelize;
					})
			})
			.catch(error => {
				throw error;
			});
		this.initModels();
		this.initData();
		return connectPromise;
	}

	getSequelize() {
		return sequelize;
	}

	initModels() {
		console.log("initialize models");
		this.users = require("./users")(sequelize, Sequelize);
		this.videos = require("./videos")(sequelize, Sequelize);
		this.comments = require("./comments")(sequelize, Sequelize);
		this.responseComments = require("./responseComments")(sequelize, Sequelize);
		this.auths = require("./auth")(sequelize, Sequelize);

		this.videos.belongsTo(this.users, { as: 'user', foreignKey: 'authorId' });

		this.comments.belongsTo(this.users, { as: 'user', foreignKey: 'authorId' });
		this.comments.belongsTo(this.videos, { as: 'video', foreignKey: 'videoId' });
		this.comments.hasMany(this.responseComments, { as: 'responseComments', foreignKey: 'commentId' })

		this.responseComments.belongsTo(this.comments, { as: 'comment', foreignKey: 'commentId' });
		this.responseComments.belongsTo(this.videos, { as: 'video', foreignKey: 'videoId' });
		this.responseComments.belongsTo(this.users, { as: 'user', foreignKey: 'authorId' });

	}

	async initData() {
		console.log('initData');
		const numberOfUser = await this.users.count({});
		console.log('numberOfUser', numberOfUser);
		if (numberOfUser === 0) {
			const user = {
				authorId: 1,
				name: 'Hoàng Nguyễn',
				email: 'hoangnguyen@gmail.com',
				linkImg: 'https://yt3.ggpht.com/yti/APfAmoEID-BpDbCQ3G_0FdDDkE8dd35BCMSac5pQgnhz=s88-c-k-c0x00ffffff-no-rj-mo',
				status: 1,
				password: '123456',
			};
			this.users.create(user);
		}
	}
}

module.exports = new Db();
