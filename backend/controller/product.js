const model = require('../config/model');
const controller = {};

controller.getAll = async (req, res) => {
    try {
        const products = await model.product.find({});
        res.json(products);
    } catch (err) {
        res.json({message: err});
    }
}

controller.getOne = async (req, res) => {
    try {
        const product = await model.product.findById(req.params.id);
        res.json(product);
    } catch(err) {
        res.json({message: err});
    }
}

controller.post = async (req, res) => {
    const product = new model.product({
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        status: req.body.status,
        image: `public/${req.file.filename}`,
    });
    product.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
        });
}

controller.update = (req, res) => {
    model.product.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        status: req.body.status,
        image: `public/${req.file.filename}`,
    })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
        });
}

controller.delete = (req, res) => {
    model.product.findByIdAndRemove(req.params.id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
        });
}

module.exports = controller;