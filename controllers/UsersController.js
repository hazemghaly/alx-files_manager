import '../server';
import bodyParser from 'body-parser';
import crypto from 'crypto';
import mongoose from 'mongoose';
import dbClient from '../utils/db';

mongoose
  .connect(dbClient.url, { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const setup = (app) => {
  app.use(bodyParser.json());
  app.post('/users', async (req, res) => {
    const { email, password } = req.body;
    const secretKey = '';
    const concatenated = req.body.password + secretKey;
    const securedpassword = crypto.createHash('SHA1').update(concatenated).digest('hex');
    if (!email) {
      return res.status(400).send('{"error":"Missing email"}');
    }
    if (!password) {
      return res.status(400).send('{"error":"Missing password"}');
    }
    const User = mongoose.model('User', userSchema);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('{"error":"Already exist"}');
    }
    const newuser = new User({
      email,
      password: securedpassword,
    });
    await newuser.save();
    return res.status(201).send({ id: newuser.id, email: newuser.email });
  });
};

module.exports = { setup };
