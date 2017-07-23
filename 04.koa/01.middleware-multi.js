const Koa = require('koa');
const app = new Koa();

const asyncTask = data => {
    return new Promise((resolve, reject) => {
        resolve(data);
    });
};

app.use(async (ctx, next) => {
    process.nextTick(() => {
        console.log('nextTick');
    });
    console.log(1);
    await asyncTask('promise await').then(data => {
        console.log(data);
    });

    asyncTask('promise').then(data => {
        console.log(data);
    });

    let start = new Date();
    console.log(2);
    await next();
    console.log(5);
    ctx.set('X-Response-Time', (new Date()) - start) + 'ms';
    // await next();
    return 'middleware1';
});

app.use(async (ctx, next) => {
    console.log(3);
    await next().then((data) => {
        console.log(data);
    });
    console.log(4);
});

app.use(async (ctx, next) => {
    console.log('=====');
    ctx.body = 'hello koa2';
    await next();
    return 'middleware3;'
});


app.listen(8090);