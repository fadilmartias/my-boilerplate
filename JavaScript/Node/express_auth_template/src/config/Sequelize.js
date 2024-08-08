import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.DB_NAME_DEV, process.env.DB_USER_DEV, process.env.DB_PASSWORD_DEV, {
    host: process.env.DB_HOST_DEV,
    dialect: process.env.SEQUELIZE_DIALECT_DEV || "mysql",
    dialectOptions: {
      supportBigNumbers: true,
    },
    timezone: process.env.SEQUELIZE_TIMEZONE_DEV, // for writing to database
    logging: console.log, // Displays all log function call parameters
  });