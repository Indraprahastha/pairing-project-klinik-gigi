'use strict';
module.exports = function(sequelize, DataTypes) {
  var Datadokter = sequelize.define('Datadokter', {
    nama: DataTypes.STRING,
    noizin: DataTypes.STRING,
    alamat: DataTypes.STRING,
    nik: DataTypes.STRING,
    email: DataTypes.STRING,
    tlp: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Datadokter;
};