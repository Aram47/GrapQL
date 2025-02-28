import User from '../models/User.js';

const userService = {
  getAllUsers: async () => {
    return await User.find();
  },

  getUserById: async (id) => {
    return await User.findById(id);
  },

  createUser: async (name, email) => {
    const user = new User({ name, email });
    await user.save();
    return user;
  },
};

export default userService;