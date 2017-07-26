const middlewares = [
    async next => {
        console.log('middleware1');
        next();
        // return '111';
    },
    async next => {
        console.log('middleware2');
        next();
    },
    async next => {
        console.log('middleware3');
        next();
        // return '222';
    }
];

const dispatch = i => {
    let fn = middlewares[i];
    // console.log(fn);
    if (!fn) {
        return Promise.resolve();
    }

    try {
        return Promise.resolve(fn(function next () {
            return dispatch(i + 1);
        }));
    } catch (err) {
        return Promise.reject(err);
    }
};

dispatch(0).then(data => {
    console.log(data);
});
