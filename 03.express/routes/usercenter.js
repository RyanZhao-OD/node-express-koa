const express = require('express');
const anotherRouter = require('./anotherRouter');

// 创建一个路由中间件的实例,它也是一个路由的容器，里面可以定义很多路由
const router = express.Router();

router.use((request, response, next) => {
    console.log('usercenter middleware------');
    next();
    // response.end('usercenter middleware------');
});

router.get('/home/:id', (request, response) => {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.render('usercenter/home', {
        uid: request.params.id
    });
});



router.use('/order', anotherRouter);


module.exports = router;