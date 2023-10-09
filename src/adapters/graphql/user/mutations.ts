import { UserService } from '../../../services';
import { UserInput } from '../../../types';

export { mutations };

const mutations = {
  addUser: async (_: any, args: Partial<UserInput>) => {
    return UserService.addUser(args);
  }
};
