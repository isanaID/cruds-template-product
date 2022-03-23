const model = require('../config/model/index');
const controller = {};

controller.getAll = async (req, res) => {
    try {
        const products = await model.product.find({});
        res.send(products);
    } catch (err) {
        res.send({message: err});
    }
}

controller.getOne = async (req, res) => {
    try {
        const product = await model.product.findById(req.params.id);
        res.send(product);
    } catch(err) {
        res.send({message: err});
    }
}

controller.post = async (req, res) => {
    try {
        const product = new model.product({
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock,
            status: req.body.status
        });
        const result = await product.save();
        res.send(result);
    } catch(err) {
        res.send({message: err});
    }
}

controller.update = (req, res) => {
    model.product.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        status: req.body.status,
        //image: `public/${req.file.filename}`,
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send({message: err});
        });
}

controller.delete = (req, res) => {
    model.product.findByIdAndRemove(req.params.id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send({message: err});
        });
}

module.exports = controller;