'use strict';
class Schema {
  getSchema(DataTypes) {
    return {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'authorId',
      },
      videoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'videoId',
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      likes: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      totalResponse: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },

    };
  }
}

// INSERT INTO comments (authorId, videoId, content, likes, totalResponse, created) values (2, 2, 'This is a comments', 4, 0, now());

module.exports = new Schema();
