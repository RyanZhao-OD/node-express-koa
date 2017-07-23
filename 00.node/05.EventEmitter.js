const EventEmitter = require('events');
// console.log(EventEmitter);
console.log('-------');

const emitter = new EventEmitter();
const HUNGRY = 'hungry';
const THIRSTY = 'thirsty';

// emitter.on(HUNGRY, () => {
//     console.log('eat aaa');
// });
// emitter.on(HUNGRY, () => {
//     console.log('eat bbb');
// });
// emitter.emit(HUNGRY);

emitter.once(THIRSTY, () => {
    console.log('drink aaa');
});
emitter.on(THIRSTY, () => {
    console.log('drink bbb');
});
emitter.emit(THIRSTY);
//
// console.log('-------');
// emitter.emit(HUNGRY);
emitter.emit(THIRSTY);