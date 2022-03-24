const express = require('express');
const app = express();
// const router = require('./routes/');
const log = require('./middlewares/logger');
const mongoose = require('mongoose');
const cors = require('cors');
const productRouterV1 = require('./routes/apiv1');
const productRouterV2 = require('./routes/index');
const port = 5000;

mongoose.connect('mongodb://localhost:27017/eduwork', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', ()=> console.log('Connected to MongoDB'));
app.use(cors());
app.use(log);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/public', express.static(path.join(__dirname, 'uploads')));
// app.use(router);
// app.use(router2);
app.use('/api/v1', productRouterV1);
app.use('/api/v2', productRouterV2);
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});
app.listen(port, () => console.log(`server : http://localhost:${port}`));