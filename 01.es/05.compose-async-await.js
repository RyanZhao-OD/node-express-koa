function compose (middleware) {
    if (!Array.isArray(middleware)) throw new TypeError('Middleware stack must be an array!');
    for (const fn of middleware) {
        if (typeof fn !== 'function') throw new TypeError('Middleware must be composed of functions!');
    }

    return function (context, next) {
        console.log(context);
        // last called middleware #
        let index = -1;
        return dispatch(0);
        function dispatch (i) {
            if (i <= index) return Promise.reject(new Error('next() called multiple times'));
            index = i;
            let fn = middleware[i];
            if (i === middleware.length) fn = next;
            if (!fn) return Promise.resolve();
            try {
                return Promise.resolve(fn(context, function next () {
                    return dispatch(i + 1);
                }))
            } catch (err) {
                return Promise.reject(err);
            }
        }
    }
}

const middlewares = [
    async (ctx, next) => {
        console.log(1);
        console.log('middleware1');
        await next().then(data => {
            console.log(data);
        });
        console.log(2);
    },
    async (ctx, next) => {
        console.log(3);
        console.log('middleware2');
        await next();
        console.log(4);
        return 'middleware2 value'
    }
];

compose(middlewares)('aaaaa').then((data) => {
    console.log(data);
});


