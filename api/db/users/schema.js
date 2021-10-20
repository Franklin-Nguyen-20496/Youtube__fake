'use strict';
class Schema {
  getSchema(DataTypes) {
    return {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id',
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      name: {
        type: DataTypes.STRING
      },
      linkImg: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.INTEGER
      }
    };
  }
}

// INSERT INTO users (name, linkImg, password, status, created) values ('Hoang Nguyen', 'https://yt3.ggpht.com/yti/APfAmoEID-BpDbCQ3G_0FdDDkE8dd35BCMSac5pQgnhz=s88-c-k-c0x00ffffff-no-rj-mo', '123456', 1, now());

module.exports = new Schema();
