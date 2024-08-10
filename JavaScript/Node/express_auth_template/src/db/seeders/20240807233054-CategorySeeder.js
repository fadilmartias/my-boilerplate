'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('categories', [
      {
        name: "Category Testing",
        slug: "testing",
        status: '1',
      },
      {
        name: "Category Testing 2",
        slug: "testing-2",
        status: '0',
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    
    return queryInterface.bulkDelete('categories', null, {});
  }
};
