import {Service} from "typedi";

@Service()
export default class UserService {
  async getUsers() {
    return [{ name: 'cl' }, { name: 'jack' }];
  }
}
