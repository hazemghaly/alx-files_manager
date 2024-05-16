import '../server';
import dbClient from '../utils/db';
import redisClient from '../utils/redis';

const setup = (app) => {
  app.get('/status', (req, res) => {
    res.status(200).send({ "redis": redisClient.isAlive(),"db": dbClient.isAlive() });
  });
  app.get('/stats', async (req, res) => {
    const users = await dbClient.nbUsers();
    const files = await dbClient.nbFiles();
    res.status(200).send(`{ "users": ${users},"files": ${files} }`);
  });
};

module.exports = { setup };
