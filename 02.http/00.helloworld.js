const http = require('http');
const EventEmitter = require('events');

// console.log(http.STATUS_CODES);

const server = http.createServer((request, response) => {
    console.log('-----------');
    console.log(request instanceof http.IncomingMessage);   // true
    console.log(response instanceof http.ServerResponse);   // true

    // response.setHeader('Content-Type', 'text/plain;charset=utf8');
    response.statusCode = 200;
    response.write('hello ');
    response.write('world!');
    response.end('哈哈');
});

server.listen(8090, 'localhost');
console.log(server instanceof EventEmitter);  // true
