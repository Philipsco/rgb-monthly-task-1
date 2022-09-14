'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('category_portofolios', [
      {
        name: 'Website',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Game',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mobile',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('category_portofolios', null, {});
  }
};
