import { createClient } from 'redis';
import { promisify } from 'util';

class RedisClient {
  constructor() {
    this.client = createClient();
    this.client.on('error', (err) => console.log('Redis Client Error', err));
  }

  isAlive() {
    if (this.client) {
      return true;
    }
    return this.client;
  }

  get(key) {
    const getAsync = promisify(this.client.get).bind(this.client);
    const value = getAsync(key);
    return (value);
  }

  async set(key, value, durationInSeconds) {
    const setAsync = promisify(this.client.set).bind(this.client);
    const setResult = await setAsync(key, value, 'EX', durationInSeconds);
    return setResult;
  }

  async del(value) {
    this.client.del(value);
  }
}

const redisClient = new RedisClient();
export default redisClient;
