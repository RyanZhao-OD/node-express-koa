let promise = Promise.reject(new Error('fail'));
console.log(1);
promise.then(null, (data) => {
    console.error(data);
});
console.log(2);