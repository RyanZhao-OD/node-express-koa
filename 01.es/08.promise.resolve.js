let promise = new Promise((resolve, reject) => {
    resolve(11);
});

promise.then(data => {
    console.log('then1----');
    console.log(data);
});

setTimeout(() => {
    promise.then(data => {
        console.log('then2----');
        console.log(data);
    });
}, 3000);