const express = require('express');
const path = require('path');
const app = express();

app.use('/dist', express.static(path.resolve(__dirname, './dist')));
app.use('/src', express.static(path.resolve(__dirname, './src')));

app.get('*', function (req, res) {
    res.sendFile(`${__dirname}/index.html`);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});