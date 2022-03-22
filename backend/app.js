const express = require('express');
const path = require('path');
const app = express();
const router = require('./routes/');
const log = require('./middlewares/logger');
const port = 5000;

app.use(log);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use(router);
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});
app.listen(port, () => console.log(`server : http://localhost:${port}`));