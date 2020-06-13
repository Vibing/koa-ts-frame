import rds from 'ali-rds';
import dotenv from 'dotenv';

dotenv.config();

const db = rds({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

export default ctx => {
  ctx.mysql = db;
};
