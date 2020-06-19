import rds from 'ali-rds';
import config from 'configs/account';
import Koa from 'koa';

const db = rds(config[process.env.NODE_ENV].mysql);

export default (ctx: Koa.ParameterizedContext) => {
  ctx.mysql = db;
};
