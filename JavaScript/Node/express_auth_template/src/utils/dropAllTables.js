import { Sequelize } from 'sequelize';
import config from '../config/config.json' assert { type: 'json' }; // Sesuaikan path ke file konfigurasi Anda

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(dbConfig);

async function dropAllTables() {
  try {
    await sequelize.authenticate();
    await sequelize.getQueryInterface().dropAllTables();
    console.log('All tables dropped successfully.');
    await sequelize.close();
  } catch (error) {
    console.error('Unable to drop tables:', error);
    process.exit(1);
  }
}

dropAllTables();
