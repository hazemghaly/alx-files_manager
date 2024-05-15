import './server';
import dbClient from './utils/db';
import redisClient from './utils/redis';

const setup = (app) => {
  app.get('/status', (req, res) => {
    if (redisClient && dbClient) {
      res.status(200).send('{ "redis": true, "db": true }');
    }
  });
  app.get('/stats', async (req, res) => {
    const users = await dbClient.nbUsers();
    const files = await dbClient.nbFiles();
    res.status(200).send(`{ "users": ${users}, "files": ${files} }`);
  });
};

module.exports = { setup };
