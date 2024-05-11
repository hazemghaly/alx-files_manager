import MongoClient from 'mongodb/lib/mongo_client';

class DBClient {
  constructor() {
    this.host = process.env.DB_HOST || 'localhost';
    this.port = process.env.DB_PORT || 27017;
    this.database = process.env.DB_DATABASE || 'files_manager';
    this.url = `mongodb://${this.host}:${this.port}`;
    this.client = new MongoClient(this.url);
  }

  isAlive() {
    this.client.connect()
    return true;
  }

  async nbUsers() {
    return await this.client.db(this.database).collection('users').countDocuments();
  }

  async nbFiles() {
    return await this.client.db(this.database).collection('files').countDocuments();
  }
}

const dbClient = new DBClient();
export default dbClient;
