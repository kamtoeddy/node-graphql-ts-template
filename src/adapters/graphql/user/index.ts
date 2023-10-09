import { queries } from './queries';
import { mutations } from './mutations';

const UserPropertiesResolvers = {};

const userResolvers = {
  User: UserPropertiesResolvers,
  mutations,
  queries
};

export { userResolvers };
