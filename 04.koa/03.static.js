const Koa = require('koa');
const static = require('koa-static');
const path = require('path');

const staticPath = './static';

const app = new Koa();

app.use(static(
    path.join(__dirname,  staticPath)
));


app.use( async ctx => {
    ctx.body = 'koa static'
});

app.listen(8090);