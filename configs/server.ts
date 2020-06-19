import dotenv from 'dotenv';
import path from 'path';
import { Action, RoutingControllersOptions } from 'routing-controllers';
import GlobalMiddleware from 'middlewares/globalMiddleware';

dotenv.config();

const isDev = process.env.NODE_ENV === 'development';

console.log('isDev-->', process.env.NODE_ENV);

const serverConfig: RoutingControllersOptions = {
  cors: {},
  development: isDev,
  routePrefix: '/api',
  controllers: [
    path.resolve(__dirname, `../app/controllers/**/*.${isDev ? 'ts' : 'js'}`)
  ],
  middlewares: [GlobalMiddleware],
  interceptors: [
    path.resolve(__dirname, `../app/interceptors/**/*.${isDev ? 'ts' : 'js'}`)
  ],
  /* 
    用于检查每个请求的用户授权角色的特殊功能
    必须返回true或用布尔true解析的promise才能授权成功
   */
  authorizationChecker: async (action: Action, roles: string[]) => (
    console.log(action, roles), true
  )
};

export default serverConfig;
