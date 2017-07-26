const express = require('express');
const path = require('path');
const app = express();
const ejs = require('ejs');

const questionRoute = require('./routes/question');
const usercenterRoute = require('./routes/usercenter');

// 静态文件中间件 指定静态文件存放的根目录的绝对路径
app.use(express.static(path.join(__dirname, 'public')));

// 当渲染模板的时候，没有指定后缀名的时候自动添加此后缀名来查找模板文件
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
// 使用ejs模板引擎
app.engine('.html', ejs.__express);

app.get('/', (request, response) => {
    response.setHeader('Content-Type', 'text/plain;charset=utf-8');
    response.end('首页');
});

app.use('/question', questionRoute);
app.use('/usercenter', usercenterRoute);

//404提示
app.all('*', (request, response) => {
    response.statusCode = 404;
    response.end('404 not found');
});

app.listen(8090);