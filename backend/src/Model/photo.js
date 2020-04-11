const Location = require('./location');
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    id : {
      primaryKey : true,
      autoIncrement: true,
      type : DataTypes.INTEGER
    },
    imageSrc: DataTypes.STRING,
    location_id: DataTypes.INTEGER
  }, {});
  /*Photo.belongsTo(Location, {
    foreignKey : 'location_id'
  });*/
  return Photo;
};