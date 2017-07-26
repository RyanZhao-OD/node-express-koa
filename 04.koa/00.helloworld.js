const Koa = require('koa');
const app = new Koa();
const loggerAsync  = require('./middleware/logger-async');

app.use(loggerAsync());

app.use(async (ctx, next) => {
    console.log('=====');
    ctx.body = 'hello koa2';
    console.log('-----');
});

app.listen(8090);
console.log(app.env);