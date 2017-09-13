'use strict';
module.exports = function(sequelize, DataTypes) {
  var Diagnosa = sequelize.define('Diagnosa', {
    gigi: DataTypes.STRING,
    gejala: DataTypes.STRING,
    tindakan: DataTypes.STRING,
    resep: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Diagnosa;
};