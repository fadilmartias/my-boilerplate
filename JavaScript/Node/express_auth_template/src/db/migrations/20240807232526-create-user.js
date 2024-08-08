'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED
        
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('0', '1'),
        allowNull: false,
        defaultValue: '1'
      },
      refresh_token: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
        onUpdate: Sequelize.fn('NOW')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};