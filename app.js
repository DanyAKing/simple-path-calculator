const express = require('express');
const { router } = require('./routes/router');

const app = express();

app.use('/', router);

app.listen(3000, '127.0.0.1', () => console.log('listening on port 3000'));
