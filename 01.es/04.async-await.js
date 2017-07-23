async function process() {
    console.log('async func-----');
    let task1Value = await 'task1Value';
    let task2Value = await 'task2Value';
    return `${task1Value} ${task2Value}`;
}

let promise1 = process();
promise1.then((data) => {
    console.log('promise1 then-----');
    console.log(data);
});

let promise2 = process();
promise2.then((data) => {
    console.log('promise2 then-----');
    console.log(data);
});
console.log(promise1 instanceof Promise);