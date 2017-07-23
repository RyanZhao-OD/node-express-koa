let promise = Promise.resolve('success');
console.log(1);
promise.then(data => {
    console.log(data);
});
console.log(2);