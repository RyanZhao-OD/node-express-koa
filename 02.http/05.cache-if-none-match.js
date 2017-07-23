const http = require('http');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

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
        let data = fs.readFileSync(SCRIPT_PATH);
        let etag = crypto.createHash('md5').update(data).digest('hex');

        //都能获取一个最新值和上次设置的比  if-none-match
        let ifNoneMatch = request.headers['if-none-match']; //上一次  ***
        if(ifNoneMatch && (ifNoneMatch == etag)) {
            response.statusCode = 304;
            response.end('');
        } else {
            response.setHeader('Etag', etag);//第一次访问时把内容进行加密放到头部
            fs.createReadStream(SCRIPT_PATH).pipe(response);
        }
    } else {
        response.statusCode = 404;
        response.end('404 not found');
    }
});

server.listen(8090);