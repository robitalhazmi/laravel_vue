import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

let UserSchema = mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
});

export const User = mongoose.model('User', UserSchema);

export const getUserByEmail = (email, callback) => {
  let Obj = {
    email: email
  }
  User.findOne(Obj, callback);
}
export const comparePassword = (password, hash, callback) => {
  bcrypt.compare(password, hash, function (err, isMatch) {
    if (err) {
      throw err;
    }
    callback(null, isMatch);
  });
}
export const getUserByID = (id, callback) => {
  User.findById(id, callback);
}