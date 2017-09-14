'use strict';
module.exports = function(sequelize, DataTypes) {
  var Diagnosa = sequelize.define('Diagnosa', {
    id_pasien: DataTypes.INTEGER,
    id_dokter: DataTypes.INTEGER,
    gigi: DataTypes.STRING,
    gejala: DataTypes.STRING,
    tindakan: DataTypes.STRING,
    resep: DataTypes.STRING
  })
  Diagnosa.associate = (models) => {
    Diagnosa.belongsTo(models.Datapasien,{foreignKey: 'id_pasien'})
    Diagnosa.belongsTo(models.Datadokter,{foreignKey: 'id_dokter'})
  }
  return Diagnosa;
};
