'use strict';
module.exports = function(sequelize, DataTypes) {
  var Login = sequelize.define('Login', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Login;
};