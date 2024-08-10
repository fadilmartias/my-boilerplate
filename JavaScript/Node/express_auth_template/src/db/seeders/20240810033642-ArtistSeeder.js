"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("artists", [
      {
        agency_id: 1,
        name: "Artist Testing",
        slug: "testing",
        description: "Contoh deskripsi",
        short_description: "Contoh deskripsi singkat",
       
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("artists", null, {});
  },
};
