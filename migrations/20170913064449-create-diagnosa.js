'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Diagnosas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_pasien: {
        type: Sequelize.INTEGER
      },
      id_dokter: {
        type: Sequelize.INTEGER
      },
      gigi: {
        type: Sequelize.STRING
      },
      gejala: {
        type: Sequelize.STRING
      },
      tindakan: {
        type: Sequelize.STRING
      },
      resep: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Diagnosas');
  }
};
