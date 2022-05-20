const express = require('express');
const router = require('./routes');

const app = express();

const PORT = 3009;

app.use(router);


app.listen(PORT, ()=> console.log('está online'));