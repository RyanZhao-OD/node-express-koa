let p = (async (ctx, next) => {
    console.log(1);
    return 2;
})();

console.log(3);

p.then(data => {
    console.log(`${data} async then---`);
});

console.log(4);

let promise = Promise.resolve(p);

promise.then(data => {
    console.log(`${data} promise then---`);
});

console.log(p === promise);