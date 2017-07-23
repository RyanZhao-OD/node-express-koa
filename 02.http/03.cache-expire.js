const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {

    if('/' === request.url) {
        response.setHeader('Content-Type', 'text/html;charset=utf8');
        fs.readFile('./public/html/index.html', (error, data) => {
            console.log('index.html-------');
            response.end(data);
        });
    } else if('/index.js' === request.url) {
        console.log('index.js-------');
        response.setHeader('Content-Type', 'application/x-javacript; charset=utf8');

        response.setHeader('Expires', new Date(new Date() + 5000).toGMTString());
        response.setHeader('Cache-control', 'max-age=5');

        // response.setHeader('Expires', 0);
        // response.setHeader('Cache-control', 'no-cache');
        fs.createReadStream('./public/script/index.js').pipe(response);
    } else {
        response.statusCode = 404;
        response.end('404 not found');
    }
});

server.listen(8090);