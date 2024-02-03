const http = require('http');
const fs = require('fs');

let handler = function (req, res) {

    if (req.url == '/index.html') {
        res.writeHead(200);

        fs.readFile('./frontend/index.html', function(err, data) {
            res.write(data);
            res.end();
        });

    } else if (req.url == '/about.html') {
        res.writeHead(200);

        fs.readFile('./frontend/about.html', function(err, data) {
            res.write(data);
            res.end();
        });

    } else if (req.url == '/contact.html') {
        res.writeHead(200);

        fs.readFile('./frontend/contact.html', function(err, data) {
            res.write(data);
            res.end();
        });
    } else {
        res.writeHead(404);
        res.write(`<h1>Page Not Found</h1>`);
    }
}

const server = http.createServer(handler);
server.listen(5000);