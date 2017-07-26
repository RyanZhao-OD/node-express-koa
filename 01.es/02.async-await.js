const asyncTask = (data, millisecond) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, millisecond);
    });
};

async function process() {
    const task1Value = await asyncTask('asyncTask1', 1000);
    const syncValue = await 'syncTask';
    const task2Value = await asyncTask('asyncTask2', 1000);
    return `${task1Value} ${syncValue} ${task2Value}`;
}

process().then((data) => {
    console.log(data);
});

console.log(typeof process);
console.log(process.prototype); // undefined
console.log(process.__proto__); // AsyncFunction {}
// new process();
