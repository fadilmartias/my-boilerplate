"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("events", [
      {
        artist_id: 1,
        title: "Event Testing",
        slug: "testing",
        description: "Contoh deskripsi",
        short_description: "Contoh deskripsi singkat",
        banner: "Contoh banner",
        location: "Jakarta",
        seating_plan: "Contoh seating plan",
        rules: "Contoh rules",
        tnc: "Contoh tnc",
      },
    ]);

    await queryInterface.bulkInsert("event_categories", [
      {
        event_id: 1, // Pastikan ini sesuai dengan event yang ada
        category_id: 1, // Pastikan ini sesuai dengan category yang ada
      },
      {
        event_id: 1,
        category_id: 2,
      },
    ]);

    await queryInterface.bulkInsert("datetimes", [
      {
        event_id: 1, // Pastikan ini sesuai dengan event yang ada
        date: new Date("2024-09-01T00:00:00Z"),
        start_time: "18:00:00", // Format HH:MM:SS
        end_time: "21:00:00", // Format HH:MM:SS
      },
      {
        event_id: 1,
        date: new Date("2024-09-02T00:00:00Z"),
        start_time: "14:00:00",
        end_time: "17:00:00",
      },
    ]);

    return queryInterface.bulkInsert("tickets", [
      {
        event_id: 1, // Pastikan ini sesuai dengan event yang ada
        name: "VIP Ticket",
        description: "VIP access with complimentary drinks.",
        status: "1",
        stock: 50,
        price: 1500000.00,
        start_sales_at: new Date("2024-09-01T00:00:00Z"),
        end_sales_at: new Date("2024-09-30T23:59:59Z"),
        flag_hide_stock: "0",
      },
      {
        event_id: 1, // Pastikan ini sesuai dengan event yang ada
        name: "Regular Ticket",
        description: "Standard entry with seating.",
        status: "1",
        stock: 200,
        price: 500000.00,
        start_sales_at: new Date("2024-09-01T00:00:00Z"),
        end_sales_at: new Date("2024-09-30T23:59:59Z"),
        flag_hide_stock: "0",
      },
      {
        event_id: 1, // Pastikan ini sesuai dengan event yang ada
        name: "Early Bird Ticket",
        description: "Discounted ticket for early purchase.",
        status: "1",
        stock: 100,
        price: 400000.00,
        start_sales_at: new Date("2024-08-01T00:00:00Z"),
        end_sales_at: new Date("2024-08-31T23:59:59Z"),
        flag_hide_stock: "1",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("events", null, {});
  },
};
