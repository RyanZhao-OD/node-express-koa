

let p = (async (ctx, next) => {
    console.log(1);
    return 2;
})();

p.then((data) => {
    console.log(3);
    console.log(data);
});

console.log(4);
let promise = Promise.resolve(p);

promise.then((data) => {
    console.log(5);
    console.log(data);
});

console.log(p === promise);