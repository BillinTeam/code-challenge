import mongoose from 'mongoose';

const User = mongoose.model('User', {
  alias: String,
  email: String,
  password: String
});



export default User;