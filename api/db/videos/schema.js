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
      videoLink: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      views: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      likes: {
        type: DataTypes.INTEGER,
      },
      dislikes: {
        type: DataTypes.INTEGER,
      }
    };
  }
}

// INSERT INTO videos (authorId, videoLink, img, name, description, views, likes, dislikes, created) values (1,'psZ1g9fMfeo' , 'https://i.ytimg.com/vi/5SnV_LVqqsA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCWQB_POyGm4CLnhKuuoeoqE3papA', 'name video', 'description this video',1545462, 9542, 11, now());

module.exports = new Schema();
