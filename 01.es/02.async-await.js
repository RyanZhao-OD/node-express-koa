const asyncTask = (data, millisecond) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, millisecond);
    });
};

async function process() {
    // console.log(this);
    const task1Value = await asyncTask('asyncTask1', 1000);
    console.log(task1Value);
    const syncValue = await 'syncTask';
    const task2Value = await asyncTask('asyncTask2', 1000);
    console.log(task2Value);
    return `${task1Value} ${syncValue} ${task2Value}`;
}

process().then(data => {
    console.log(data);
});

console.log(typeof process);    // 'function'
console.log(process.constructor);
console.log(process.prototype); // undefined
console.log(process.__proto__); // AsyncFunction {}
console.log(process.__proto__.__proto__ === Function.prototype);    // true
console.log(process instanceof Function); // true

// new process();
