const express = require('express');
const app = express();

app.get('/index.html', function (req, res) {
    // res.send('<h1>Hello From Express</h1>')
    res.sendFile(__dirname + '/frontend/index.html');
})

app.listen(5000);