import { Service } from 'typedi';
import Koa from 'koa';
import app from 'app';

@Service()
export default class UserService {
  app: Koa;

  constructor() {
    this.app = app;
  }

  async getUsers() {
    const res = await app.mysql.select('projects');
    console.log(res);
    return res;
  }
}
