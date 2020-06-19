import { Service } from 'typedi';

@Service()
export default class UserService {
  async getUsers(ctx) {
    const res = await ctx.mysql.select('projects');
    return res;
  }
}
