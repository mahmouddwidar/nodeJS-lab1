const http = require('http');
const fs = require('fs');
const qs = require('querystring');

let handler = function (req, res) {

    if(req.url == '/form.html') {
        res.writeHead(200);

        fs.readFile('./frontend/form.html', function(err, data) {
            res.write(data);
            res.end();
        });

    } else if (req.url.indexOf('/form') > -1) {
        if (req.method == 'POST') {
            let reqData = '';

            req.on('data', function(data) {
                reqData += data;
            })

            req.on('end', function (){
                let formData = qs.parse(reqData);
                if (formData.password.length < 8) {
                    res.write(`<h1>Error password is less than 8 characters</h1>`);
                } else {
                    res.write(`<h1>Registration success</h1>`)
                }
                res.end();
            })
        }

    } else {
        res.writeHead(404);
        res.write(`<h1>Page Not Found</h1>`);
        res.end();
    }
}

const server = http.createServer(handler);
server.listen(5000);