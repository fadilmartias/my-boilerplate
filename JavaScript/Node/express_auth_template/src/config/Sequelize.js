import { Sequelize } from "sequelize";
import { autoImport } from "@/utils/AutoImport.js";

export const sequelize = new Sequelize('express_starter', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      supportBigNumbers: true,
    },
    timezone: '+07:00', // for writing to database
    logging: (...msg) => console.log(msg), // Displays all log function call parameters
  });