import { KoaMiddlewareInterface } from 'routing-controllers';

export default class MyMiddleware implements KoaMiddlewareInterface {
  // interface implementation is optional

  use(context: any, next: (err?: any) => Promise<any>): Promise<any> {
    console.log('do something before execution...');
    return next()
      .then(() => {
        console.log('do something after execution');
      })
      .catch(error => {
        console.log('error handling is also here');
      });
  }
}
