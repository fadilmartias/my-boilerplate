"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("events", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED,
      },
      artist_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
          model: "artists",
          key: "id",
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT",
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      slug: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      short_description: {
        type: Sequelize.TEXT,
      },
      banner: {
        type: Sequelize.TEXT,
      },
      location: {
        type: Sequelize.STRING,
      },
      seating_plan: {
        type: Sequelize.TEXT,
      },
      rules: {
        type: Sequelize.TEXT,
      },
      tnc: {
        type: Sequelize.TEXT,
      },
      status: {
        type: Sequelize.ENUM("0", "1"),
        allowNull: false,
        defaultValue: "1",
      },
      flag_private: {
        type: Sequelize.ENUM("0", "1"),
        allowNull: false,
        defaultValue: "0",
      },
      created_at: {
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("events");
  },
};
