import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: process.env.DB_HOST_DEV || "localhost",
  user: process.env.DB_USER_DEV || "root",
  password: process.env.DB_PASSWORD_DEV || "",
  database: process.env.DB_DATABASE_DEV || "express_starter",
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
  supportBigNumbers: true,
});
