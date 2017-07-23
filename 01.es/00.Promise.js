console.log(1);
let promise = new Promise((resolve, reject) => {
    console.log(2);
    resolve('success');
    console.log(3);
});

console.log(4);
promise.then(data => {
    console.log(data);
});
console.log(5);