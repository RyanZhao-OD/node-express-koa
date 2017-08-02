const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next) => {
    ctx.body = 'hello koa2';
    console.log(11);
});

router.get('/tologin', async (ctx, next) => {
    ctx.body = 'login page';
});

// curl -X POST -H 'Cookie: BDUSS=aaa' -H 'X-ik-token: xxx'  http://localhost:8090/login
router.post('/login', async (ctx, next) => {
    console.log('------');
    ctx.body = 'login page';
});

router.get('/usercenter/:id', async (ctx, next) => {
    console.log(ctx.params.id);
    let isLogin = true;
    if (isLogin) {
        ctx.body = 'usercenter';
        console.log();
    } else {
        ctx.redirect('/tologin');
        ctx.status = 301;
    }
});


app.use(router.routes())
    .use(router.allowedMethods())
    .listen(8090);