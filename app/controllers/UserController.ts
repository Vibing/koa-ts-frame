import { JsonController, Get } from 'routing-controllers';
import UserService from 'services/UserService';

@JsonController()
export default class UserController {
  constructor(private userService: UserService) {}

  @Get('/users')
  async getAll() {
    return { message: 'hello2', users: await this.userService.getUsers() };
  }
}
