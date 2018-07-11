import _ from 'lodash';
import Faker from 'faker';
import mongoose from 'mongoose';

const User = mongoose.model('User', {
  alias: String,
  email: String,
  password: String
});

/*User.create({
  alias: 'jsertx',
  email: 'sergiazow@gmail.com',
  password: bcrypt.hashSync('123456', 8)
});*/

export default User;