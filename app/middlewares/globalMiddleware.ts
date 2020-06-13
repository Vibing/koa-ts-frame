import { KoaMiddlewareInterface, Middleware } from 'routing-controllers';

@Middleware({
  type: 'before'
})
export default class GlobalMiddleware implements KoaMiddlewareInterface {
  use(context: any, next: (err?: any) => Promise<any>): Promise<any> {
    console.log('global middleware---->>do something before execution...');
    return next()
      .then(() => {
        console.log('global middleware---->>do something after execution');
      })
      .catch(error => {
        console.log('global middleware---->>error handling is also here');
      });
  }
}
