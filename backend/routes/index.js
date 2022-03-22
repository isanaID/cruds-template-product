const router = require('express').Router();
const db = require('../config/mongodb');
const multer = require('multer');
const controller = require('../controller/index');

router.get('/', (req, res) => {
    const {page, total} = req.query;
    res.send({
        status: 'success',
        message: 'Welcome to the API',
        page,
        total
    });
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage});

router.get('/product', controller.product.getAll);
router.get('/product/:id', controller.product.getOne);
router.post('/product/', upload.single('image'), controller.product.post);
router.put('/product/:id', upload.single('image'), controller.product.update);
router.delete('/product/:id', controller.product.delete);

module.exports = router;