const router = require('express').Router();
//const multer = require('multer');
const controller = require('../controller/product');

router.get('/', (req, res) => {
    const {page, total} = req.query;
    res.send({
        status: 'success',
        message: 'Welcome to the API',
        page,
        total
    });
});

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './uploads');
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     }
// });
// const upload = multer({storage: storage});

router.get('/product', controller.getAll);
router.get('/product/:id', controller.getOne);
router.post('/product/', controller.post);
router.put('/product/:id', controller.update);
router.delete('/product/:id', controller.delete);

module.exports = router;