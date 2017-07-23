const path = require('path');

const module1 = require('./module1');
const moduleAgain = require('./module1');

console.log(module1);
console.log('-------');
console.log(require.cache);
console.log('-------');
console.log(require.cache[path.resolve(__dirname, 'module1.js')]);

