import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.SEQUELIZE_DIALECT || "mysql",
    dialectOptions: {
      supportBigNumbers: true,
    },
    timezone: process.env.SEQUELIZE_TIMEZONE, // for writing to database
    logging: console.log, // Displays all log function call parameters
  });