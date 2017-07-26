const Koa = require('koa');
const views = require('koa-views');
const static = require('koa-static');
const path = require('path');

const staticPath = './static';

const app = new Koa();

// 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
    map: { html: 'ejs' }
}));

// 静态文件中间件
app.use(static(
    path.join(__dirname,  staticPath)
));

app.use(async ctx => {
    await ctx.render('index', {
        title: 'hello koa2',
        content: 'This is content'
    });
});

app.listen(8090);