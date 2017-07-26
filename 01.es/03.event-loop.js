setImmediate(() => {
    console.log('setImmediate');
});

setTimeout(() => {
    console.log('setTimeout');
});

new Promise((resolve, reject) => {
    resolve('promise');
}).then((data) => {
    console.log(data);
});

(async () => {
    return 'async';
})().then(data => {
    console.log(data);
});

process.nextTick(() => {
    console.log('process.nextTick');
});

console.log('current');




