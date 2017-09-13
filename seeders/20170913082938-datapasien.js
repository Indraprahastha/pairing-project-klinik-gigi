'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Datapasiens', [{
      nama: 'Bambang Subagio',
      alamat: 'JL Ketapang 5',
      pekerjaan: 'Kuli Panggul',
      tlp: '08091000800',
      email: 'bambangsubagio@klinik.id',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: 'Ishak Nasution',
      alamat: 'JL Ketupat 5',
      pekerjaan: 'Kuli Bangunan',
      tlp: '08091000800',
      email: 'ishaknasution@klinik.id',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
