import Koa from 'koa';
import mixin from './mixin';

export default (app: Koa) => {
  app.use(async (ctx, next) => {
    mixin(ctx);
    await next();
  });
};
