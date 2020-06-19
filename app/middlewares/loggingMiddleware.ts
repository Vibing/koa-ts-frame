import { KoaMiddlewareInterface } from 'routing-controllers';

export default class LogMiddleware implements KoaMiddlewareInterface {
  // interface implementation is optional

  use(context: any, next: (err?: any) => Promise<any>): Promise<any> {
    console.log('logging...');
    return next()
      .then(() => {
        console.log('log middleware---->>do something after execution');
      })
      .catch(error => {
        console.log('log middleware---->>error handling is also here');
      });
  }
}
