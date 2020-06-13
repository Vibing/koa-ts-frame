import { Service } from 'typedi';
import { Context } from 'koa';

@Service()
export default class UserService {
  async getUsers(ctx: Context) {
    const res = await ctx.mysql.select('projects');
    console.log(res);
    return res;
  }
}
