/**
 * redux compose实现
 * @param funcs 函数数组
 * @returns {*}
*/
function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg;
    }

    if (funcs.length === 1) {
        return funcs[0];
    }

    return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

function compose2() {
    var funcArr = Array.prototype.slice.call(arguments);
    return function(param) {
        var tempResult = funcArr[funcArr.length - 1](param);
        for (var i = funcArr.length - 2; i >= 0; i--) {
            tempResult = funcArr[i](tempResult);
        }
        return tempResult;
    };
}

// 纯函数
const increase = x => x + 1;
const multi = x => x * 2;

console.log(compose(increase, multi)(5));
console.log(compose2(increase, multi)(5));