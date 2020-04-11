
'use strict';
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id : {
      primaryKey : true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email : DataTypes.STRING,
    phone : DataTypes.STRING,
    password : DataTypes.STRING,
  }, {
    hooks :{
      beforeCreate: (user) => {
        user.password = bcrypt.hashSync(user.password, 10);
        return user;
      }
    },

  });

  User.prototype.validPassword = function validPassword(password) {
    return bcrypt.compareSync(password, this.password);
}

User.prototype.generateToken = function generateToken() {
  return jwt.sign({ id: this.id }, "secret", {
    expiresIn: 86400
  });
}

  return User;
};
