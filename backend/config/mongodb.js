const { MongoClient } = require('mongodb');

const url = `mongodb://user_product:qwerty123@localhost:27017?authSource=admin`;
const client = new MongoClient(url);

(async () => {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        } catch (err) {
            console.log('Error connecting to MongoDB:', err);
            }
        })();

const db = client.db('eduwork');

module.exports = db;