const { ObjectID } = require('bson');
const db = require('../config/mongodb');
const fs = require('fs');
const path = require('path');

const index = (req, res) => {
    db.collection('products').find()
        .toArray()
        .then(result => res.send(result))
        .catch(error => res.send(error));
};

const view = (req, res) => {
    db.collection('products').findOne({ _id: ObjectID(id) })
        .then(result => res.send(result))
        .catch(error => res.send(error));
};

const store = (req, res) => {
    const { name, price, stock, status } = req.body;
    const image = req.files;
    if(image) {
        const target = path.join(__dirname, '../uploads/' + image.originalname);
        fs.rename(image.path, target);
        db.collection('products').insertOne({name, price, stock, status, image_url: `http://localhost:5000/uploads/${image.originalname}`})
            .then(result => res.send(result))
            .catch(error => res.send(error));
    }
}

module.exports = {
    index,
    view,
    store
}