import '../server';
import dbClient from '../utils/db';
import redisClient from '../utils/redis';

exports.getStatus = (req, res) => {
  res.status(200).send({ redis: redisClient.isAlive(), db: dbClient.isAlive() });
};

exports.getStats = async (req, res) => {
  const users = await dbClient.nbUsers();
  const files = await dbClient.nbFiles();
  res.status(200).send(`{ "users":${users},"files":${files} }`);
};
