const express = require('express');
const mongodb = require('./db/conn');
const route = require('./routes/routes.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/', route)

app.listen(port, () => {
    console.log('Connected to server')
});