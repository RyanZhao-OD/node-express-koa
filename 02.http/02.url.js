const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    if('/' === request.url) {
        response.setHeader('Content-Type', 'text/html;charset=utf8');
        fs.readFile('./public/html/index.html', (error, data) => {
            console.log('index.html-------');
            console.log(data);
            response.end(data);
        });
    } else if('/index.js' === request.url) {
        response.setHeader('Content-Type', 'application/x-javascript; charset=utf8');
        fs.readFile('./public/script/index.js', (error, data) => {
            console.log('index.js-------');
            console.log(data);
            response.end(data);
        });
    } else if('/index.css' === request.url) {
        response.setHeader('Content-Type', 'text/css; charset=utf8');
        fs.readFile('./public/style/index.css', (error, data) => {
            console.log('index.css-------');
            console.log(data);
            response.end(data);
        });
    } else {
        response.statusCode = 404;
        response.end('404 not found');
    }
});

server.listen(8090);