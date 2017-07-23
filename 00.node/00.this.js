console.log(__dirname);
console.log(__filename);
// console.log(require);

console.log(this);
console.log(this === module.exports);
console.log(this === exports);

console.log('---------');
console.log(this.__proto__ === Object.prototype);   // true
console.log(Object.create(null));
/**
 * js文件模块的编译(.js文件)
 * node对获取js文件内容头尾包装
 */
// (function (exports, require, module, __filename, __dirname) {
//     var math = require('math');
//     exports.area = function (radius) {
//         return math.PI * radius * radius;
//     };
// });