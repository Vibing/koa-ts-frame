import { Context } from 'koa';
import {
  JsonController,
  Get,
  Ctx,
  UseBefore,
  UseAfter
} from 'routing-controllers';
import UserService from 'services/UserService';
import { MyMiddleware } from 'middlewares/MyMiddleware';
import { loggingMiddleware } from 'middlewares/loggingMiddleware';

@JsonController()
@UseBefore(MyMiddleware)
@UseAfter(loggingMiddleware)
export default class UserController {
  constructor(private userService: UserService) {}

  @Get('/users')
  async getAll(@Ctx() ctx: Context) {
    console.log('ctx');

    return { message: 'hello2', users: await this.userService.getUsers() };
  }

  @Get('/user')
  async getOne() {
    return { user: 'hello' };
  }
}
