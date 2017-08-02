// const thenable = {
//     then(resolve, reject) {
//         resolve('thenable object');
//     }
// };
//
// const p = new Promise((resolve, reject) => {
//     resolve('promise object');
// });
//
// p.then(data => {
//     console.log(data);
// });


let promise = Promise.resolve(null);
console.log(1);
promise.then(data => {
    console.log(data);
});
console.log(2);
// console.log(p === promise);
