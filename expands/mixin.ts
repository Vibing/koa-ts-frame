import rds from 'ali-rds';
import config from 'configs/account';

const db = rds(config[process.env.NODE_ENV].mysql);

export default ctx => {
  ctx.mysql = db;
};
