const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next) => {
    ctx.body = 'hello koa2';
});

router.get('/usercenter', async (ctx, next) => {
    let isLogin = false;
    if (isLogin) {

    } else {
        ctx.redirect('/login');
        ctx.status = 301;
    }

});

router.get('/login', async (ctx, next) => {
    ctx.body = 'login page';
});

app.use(router.routes())
    .use(router.allowedMethods())
    .listen(8090);