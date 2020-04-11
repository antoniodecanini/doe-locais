const {User, Photo} = require('./');

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    id : {
      primaryKey : true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    width: DataTypes.FLOAT,
    height: DataTypes.FLOAT
  }, {});

  Location.associate = (models) => {
    Location.belongsTo(models.User, {
      foreignKey : 'user_id'
    });
    Location.hasMany(models.Photo, {
      foreignKey : 'location_id'
    });
  }
  return Location;
};