import sha1 from 'sha1';
import dbClient from '../utils/db';

class UsersController {
  static async postNew(request, response) {
    const { email, password } = request.body;
    if (!email) {
      return response.status(400).send('{"error":"Missing email"}');
    }
    if (!password) {
      return response.status(400).send('{"error":"Missing password"}');
    }
    const hashPwd = sha1(password);
    const collection = dbClient.client.db(dbClient.database).collection('users');
    const user1 = await collection.findOne({ email });
    if (user1) {
      response.status(400).json({ error: 'Already exist' });
    }
    collection.insertOne({ email, password: hashPwd });
    const newUser = await collection.findOne(
      { email }, { projection: { email: 1 } },
    );
    return response.status(201).json({ id: newUser._id, email: newUser.email });
  }
}
module.exports = UsersController;
