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
    return queryInterface.bulkInsert('Datadokters', [{
      nama: 'drg Ratna Ayu K',
      noizin: 'abcd - 163 - zxcv',
      alamat: 'JL Squadron',
      nik: 'klinik-1',
      email: 'ratnaayu@klinik.id',
      tlp: '08091000800',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: 'drg Amrullah Djaja',
      noizin: 'poiu - 163 - mnbl',
      alamat: 'JL Tempe 5',
      nik: 'klinik-2',
      email: 'amrullah@klinik.id',
      tlp: '08091000900',
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
