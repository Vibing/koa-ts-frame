import { Context } from 'koa';
import {
  JsonController,
  Get,
  Ctx
  /*  UseBefore,
  UseAfter */
} from 'routing-controllers';
import UserService from 'services/UserService';
/* import MyMiddleware from 'middlewares/MyMiddleware';
import loggingMiddleware from 'middlewares/loggingMiddleware'; */

@JsonController()
export default class UserController {
  constructor(private userService: UserService) {}

  @Get('/users')
  async getAll(@Ctx() ctx: Context) {
    return { message: 'hello2', users: await this.userService.getUsers(ctx) };
  }

  @Get('/user')
  async getOne(@Ctx() ctx: Context) {
    console.log(ctx);

    return { user: 'hello' };
  }
}
