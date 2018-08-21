const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const firebaseService = require('./server/services/firebaseService');
firebaseService.initFirebase();

const todoRouter = require('./server/routes/todo/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CROSS origin for testing
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/dist', express.static(path.resolve(__dirname, './dist')));
app.use('/src', express.static(path.resolve(__dirname, './src')));

app.use('/api',todoRouter);

app.get('*', function (req, res) {
    res.sendFile(`${__dirname}/index.html`);
});

app.listen(3000, function () {
    console.log('Server listening on port 3000!');
});