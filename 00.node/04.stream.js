const fs = require('fs');

let rs = fs.createReadStream('./test-stream.txt', {
    highWaterMark: 3
});
rs.setEncoding('utf8');

let str = '';
rs.on('data', (data) => {
    str += data;
    console.log(str);
    rs.pause(); //停止触发data事件
});

let timer = global.setInterval(() => {
    rs.resume(); //恢复触发resume事件
}, 1000);

rs.on('end', () => {
    console.log('---------');
    console.log(str);
    global.clearInterval(timer);
});