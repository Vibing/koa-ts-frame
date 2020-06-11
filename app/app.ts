import 'reflect-metadata';
import { useKoaServer, Action, useContainer } from 'routing-controllers';
import { Container } from 'typedi';
import Koa from 'koa';
// import UserController from 'controllers/UserController';

const app = new Koa();

useContainer(Container);
// app.use();

const server = useKoaServer(app, {
  cors: {},
  development: false,
  routePrefix: '/api',
  controllers: [`${__dirname}/controllers/**/*.*s`],
  middlewares: [`${__dirname}/middlewares/**/*.*s`],
  interceptors: [`${__dirname}/interceptors/**/*.*s`],
  /* 
    用于检查每个请求的用户授权角色的特殊功能
    必须返回true或用布尔true解析的promise才能授权成功
   */
  authorizationChecker: async (action: Action, roles: string[]) => (
    console.log(action, roles), true
  )
});

server.listen(3000);
