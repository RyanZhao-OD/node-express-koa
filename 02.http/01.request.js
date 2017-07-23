const http = require('http');
const server = http.createServer((request, response) => {
    console.log('-------');
    response.setHeader('Content-Type', 'text/plain;charset=utf8');
    console.log(request.url);      //
    console.log(request.method);   // GET
    console.log(request.headers);
    response.end('request 哈哈----');
});
server.listen(8090, 'localhost');