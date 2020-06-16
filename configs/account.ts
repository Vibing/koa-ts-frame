import dotenv from 'dotenv';

dotenv.config();

export default {
  development: {
    mysql: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    },

    redis: {
      host: process.env.REDIS_HOST,
      username: process.env.REDIS_USER,
      password: process.env.REDIS_PASSWORD
    }
  },

  production: {
    mysql: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    },

    redis: {
      host: process.env.REDIS_HOST,
      username: process.env.REDIS_USER,
      password: process.env.REDIS_PASSWORD
    }
  }
};
