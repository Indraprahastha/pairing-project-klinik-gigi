'use strict';
module.exports = function(sequelize, DataTypes) {
  var Datapasien = sequelize.define('Datapasien', {
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    pekerjaan: DataTypes.STRING,
    tlp: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Datapasien;
};