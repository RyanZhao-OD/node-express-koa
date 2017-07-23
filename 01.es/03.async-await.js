const asyncTask = (data, millisecond) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, millisecond);
    });
};

async function process() {
    let task1Value = await asyncTask('asyncTask1', 1000);
    console.log(11);
    // console.log(task1Value);

    let syncValue = await 'syncTask';
    // console.log(syncValue);

    let task2Value = await asyncTask('asyncTask2', 1000);
    // console.log(task2Value);

    return `${task1Value} ${syncValue} ${task2Value}`;
}

process().then((data) => {
    console.log(data);
});

console.log(typeof process);
console.log(process.prototype); // undefined
console.log(process.__proto__); // AsyncFunction {}
// new process();
