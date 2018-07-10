import _ from 'lodash';
import Faker from 'faker';
import mongoose from 'mongoose';

const User = mongoose.model('User', {
  email: String,
  password: String
});


/*User.create({
  email: 'sergiazow@gmail.com',
  password: bcrypt.hashSync('123456', 8)
});*/

export default User;