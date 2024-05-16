import '../server';
import dbClient from '../utils/db';
import { sha1 } from '../node_modules/sha1';

exports.postNew = async (req, res) => {
    if (req.email && req.password && dbClient.isAlive()) {
        const collection = dbClient.db(dbClient.database).collection('users');
        if (!req.email){
            res.status(400).send({"error":"Missing email"});
        }
        if (!req.password) {
            res.status(400).send({"error":"Missing password"});
        }
        if (await collection.findOne({email: req.email})) {
            res.status(400).send({"error":"Already exist"})
        }
        new_user = await collection.insertOne({ "email": req.email , "password": sha1(req.password)})
        console.log(new_user)
        res.status(201).send('HI')
    }
};
