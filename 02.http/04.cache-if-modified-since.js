const http = require('http');
const path = require('path');
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
        response.setHeader('Expires', 0);
        response.setHeader('Cache-control', 'no-cache');
        response.setHeader('Content-Type', 'application/x-javacript; charset=utf8');

        const SCRIPT_PATH = './public/script/index.js';
        let ctime = fs.statSync(SCRIPT_PATH).ctime.toUTCString();

        //上一次修改时间
        let ifModifiedSince = request.headers['if-modified-since'];
        console.log('------');
        console.log(ifModifiedSince);
        console.log(ctime);

        if(ifModifiedSince && (ctime === ifModifiedSince)) {
            //缓存的时间和当前修改过的时间相同，才会调用缓存
            response.statusCode = 304;
            response.end('');
        } else {
            response.setHeader('Last-Modified', ctime);
            fs.createReadStream(SCRIPT_PATH).pipe(response);
        }
    } else {
        response.statusCode = 404;
        response.end('404 not found');
    }
});

server.listen(8090);