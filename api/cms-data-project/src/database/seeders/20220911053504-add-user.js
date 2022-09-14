'use strict';
const bcrypt = require("../../utils/bcrypt.js");

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      name: 'Philip Bagus Kristianto',
      email: 'bagus09051998@gmail.com',
      password: await bcrypt.hash('password'),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
