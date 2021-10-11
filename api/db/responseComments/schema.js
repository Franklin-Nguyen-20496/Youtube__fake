'use strict';
class Schema {
  getSchema(DataTypes) {
    return {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      videoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'videoId',
      },
      authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'authorId',
      },
      commentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'commentId',
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
    };
  }
}

// INSERT INTO responseComments (authorId, commentId, content, likes, created) values (4, 1, 'This is a response comments', 2, now());

module.exports = new Schema();
