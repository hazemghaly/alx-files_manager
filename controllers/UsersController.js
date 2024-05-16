import mongoose from 'mongoose';
// import sha1 from 'sha1';
// import '../server';
import crypto from 'crypto';
import { sha1 } from '../node_modules/sha1';
import dbClient from '../utils/db';
import '../server';

mongoose
  .connect(dbClient.url, { useNewUrlParser: true, useUnifiedTopology: true });
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const User = mongoose.model('User', UserSchema);

const postNew = async (req, res) => {
  const { email, password } = req.body;
  const secretKey = '';
  const concatenated = req.password + secretKey;
  const securedpassword = crypto.createHash('SHA1').update(concatenated).digest('hex');
  if (!email) {
    return res.status(400).send('{"error":"Missing email"}');
  }
  if (!password) {
    return res.status(400).send('{"error":"Missing password"}');
  }
  const existingUser = await User.findOne({ email: req.email });
  if (existingUser) {
    return res.status(400).send('{"error":"Already exist"}');
  }
  const newuser = new User({
    email,
    password: securedpassword,
  });
  await newuser.save();
  console.log(newuser.email);
  return res.status(201).send({ id: newuser.id, email: newuser.email });
};
module.exports = { postNew };
