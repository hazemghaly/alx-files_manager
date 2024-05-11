import '../server';
import dbClient from '../utils/db';
import redisClient from '../utils/redis';

const setup = (app) => {
  app.get('/status', (req, res) => {
    if (redisClient && dbClient) {
      res.status(200).send('{ "redis": true, "db": true }');
    }
  });
  app.get('/stats', (req, res) => {
    res.status(200).send(`{ "users": ${dbClient.users}, "files": ${dbClient.files} }`);
  });
};

module.exports = { setup };
