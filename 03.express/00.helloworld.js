const express = require('express');  // 第三方模块
const app = express();
const http = require('http');

app.use((request, response, next) => {
    console.log('middleware------');
    response.setHeader('Content-Type', 'text/plain;charset=utf-8');
    next();
});

app.get('/', (request, response) => {
    console.log(request instanceof http.IncomingMessage);
    console.log(response instanceof http.ServerResponse);
    response.end('首页');
});

app.get('/user', (request, response) => {
    response.end('user用户主页');
});

app.get('/login', (request, response) => {  //匹配第一个
    response.end('get login1 登录');
});
app.get('/login', (request, response) => {
    response.end('get login2 登录');
});

// curl -X POST -H 'Cookie: BDUSS=aaa' -H 'X-ik-token: xxx'  http://localhost:8090/login
app.post('/login', (request, response) => {
    console.log(request.headers);
    response.end('post login 登录');
});

//404提示
app.all('*', (request, response) => {
    response.end('404 not found');
});

app.listen(8090);