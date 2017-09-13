'use strict';
module.exports = function(sequelize, DataTypes) {
  var Datapasien = sequelize.define('Datapasien', {
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    pekerjaan: DataTypes.STRING,
    tlp: DataTypes.STRING,
    email: DataTypes.STRING
  })

  Datapasien.associate = function(models) {
    // associations can be defined here
    Datapasien.belongsToMany(models.Datadokter, {through: 'Diagnosa',foreignKey: 'id_pasien'});
  }
  return Datapasien;
};
