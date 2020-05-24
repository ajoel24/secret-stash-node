const mongoose = require('mongoose');
const mongooseEncryption = require('mongoose-encryption');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const secret = process.env.SECRET;

userSchema.plugin(mongooseEncryption, {
  secret: secret,
  encryptedFields: ['password'],
});

const User = new mongoose.model('User', userSchema);

module.exports = User;
